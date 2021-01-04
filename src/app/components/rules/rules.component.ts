import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { RulesSet, initIncidenceRulesSet, checkRulesIntegrity, checkIncidenceRulesIntegrity } from 'src/app/interfaces/rules';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import ZipcodesGermany from 'src/assets/zipcodes.de.json';

// Licence: Robert Koch-Institut (RKI), dl-de/by-2-0

// Thanks to @rphl (https://github.com/rphl) and @tzschies (https://github.com/tzschies) for their inspiring work on this widget. See https://gist.github.com/rphl/0491c5f9cb345bf831248732374c4ef5 and https://gist.github.com/tzschies/563fab70b37609bc8f2f630d566bcbc9.

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  dataStage: string;
  previousDays = 0;
  states = {};
  plz: string;
  selectedRSCode: string;
  activeIncidenceIndex: number;

  incidenceData;

  rules: RulesSet;

  constructor(public api: ApiService, private firestore: FirestoreService, private route: ActivatedRoute, private router: Router) {
    this.activeIncidenceIndex = 0;
    this.rules = {
      importantAnnouncement: {
        rule: ''
      },
      masks: {
        isMasks: false,
        where: ''
      },
      closedStores: { stores: '', explicitlyOpen: '', remarks: '' },
      closedInstitutions: { institutions: '', explicitlyOpen: '', remarks: '' },
      incidenceRules: [initIncidenceRulesSet()],
      timestamp: 0
    };
    this.dataStage = 'initial';
    this.previousDays = 30;
    this.states = {
      'Baden-Württemberg': 'BW',
      Bayern: 'BY',
      Berlin: 'BE',
      Brandenburg: 'BB',
      Bremen: 'HB',
      Hamburg: 'HH',
      Hessen: 'HE',
      'Mecklenburg-Vorpommern': 'MV',
      Niedersachsen: 'NI',
      'Nordrhein-Westfalen': 'NRW',
      'Rheinland-Pfalz': 'RP',
      Saarland: 'SL',
      Sachsen: 'SN',
      'Sachsen-Anhalt': 'ST',
      'Schleswig-Holstein': 'SH',
      Thüringen: 'TH'
    };
  }

  ngOnInit() {
    this.updateRoute();
  }

  updateRoute() {
    this.route.queryParamMap
      .subscribe((params) => {
        if (params.has('verwaltungsid') && this.selectedRSCode != params.get('verwaltungsid')) {
          this.selectedRSCode = params.get('verwaltungsid');
          let data = this.getCityDataFromRS(this.selectedRSCode);
          if (data.community_code != "-1") {
            let location: Coordinates = {
              accuracy: Number(30),
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              longitude: Number(data.longitude),
              latitude: Number(data.latitude),
              speed: null,
            }
            this.loadData(location);
          }          
          console.log('New community: ' + params.get('verwaltungsid'))
        }
      })
  }

  async onLocationClick($event) {
    this.dataStage = 'loading';
    const location: Coordinates = await this.getPosition();
    this.loadData(location);
  }

  onPLZClick(event: Event) {
    let data = this.getCityDataFromZip(this.plz);
    if (data.community_code != "-1") {
      let location: Coordinates = {
        accuracy: Number(30),
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        longitude: Number(data.longitude),
        latitude: Number(data.latitude),
        speed: null,
      }
      this.loadData(location);
    }
  }

  loadData(location: Coordinates) {
    this.getData(location).then((result) => {
      this.incidenceData = result;
      this.activeIncidenceIndex = this.getIncidenceIndex(this.incidenceData.incidence);
      this.selectedRSCode = result.rs;
      this.dataStage = 'loaded';
      this.router.navigate(['/'], { queryParams: { verwaltungsid: this.selectedRSCode } });
      this.loadStateRule(result.areaNameBySide);
    });
  }

  async getData(location: Coordinates) {
    try {
      if (location) {
        console.log(location)
        const result: any = await this.api.get_districts(location).toPromise();
        const attr = result.features[0].attributes;
        const historicalData: any = await this.api.get_districts_history(attr.RS, this.previousDays).toPromise();
        const aggregate = historicalData.features.map(f => f.attributes).reduce((dict, feature) => {
          dict[feature.Meldedatum] = (dict[feature.Meldedatum] | 0) + feature.AnzahlFall;
          return dict;
        }, {});
        const timeline = Object.keys(aggregate).sort().map(k => aggregate[k]);
        const casesYesterday7 = timeline.slice(-8, -1).reduce(this.sum);
        const casesToday7 = timeline.slice(-7).reduce(this.sum);
        const trend = (casesToday7 === casesYesterday7) ? '→' : (casesToday7 > casesYesterday7) ? '↑' : '↓';
        return {
          incidence: attr.cases7_per_100k.toFixed(0),
          areaName: attr.GEN,
          trend,
          incidenceBySide:
            attr.cases7_bl_per_100k.toFixed(0),
          areaNameBySide:
            this.states[attr.BL],
          bundesland: attr.BL,
          timeline,
          rs: attr.RS
        };
      }
      return { error: 'Standort nicht verfügbar.' };
    } catch (e) {
      return { error: 'Fehler bei Datenabruf.' };
    }
  }

  getPosition = () => {
    return new Promise<Coordinates>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      }, (err) => {
        reject(err);
      });
    });
  }

  sum(a, b) {
    return a + b;
  }

  getCityDataFromZip(zipcode: string) {
    console.log(ZipcodesGermany[0])
    for (let k = ZipcodesGermany.length - 1; k >= 0; --k) {
      if (ZipcodesGermany[k].zipcode == zipcode) {
        return ZipcodesGermany[k];
      }
    }
    return {
      community_code: "-1",
      longitude: 0,
      latitude: 0
    }
  }

  getCityDataFromRS(rscode: string) {
    console.log(ZipcodesGermany[0])
    for (let k = ZipcodesGermany.length - 1; k >= 0; --k) {
      if (ZipcodesGermany[k].community_code == rscode) {
        return ZipcodesGermany[k];
      }
    }
    return {
      community_code: "-1",
      longitude: 0,
      latitude: 0
    }
  }

  loadStateRule(state: string) {
    this.firestore.getStateRules(state).pipe(
      map(doc =>
        ({ id: doc.id, data: <RulesSet>doc.data() })
      )
    ).subscribe((data) => {
      if (data != undefined && data.data != undefined && data.data.importantAnnouncement != undefined) {
        this.rules = checkRulesIntegrity(data.data);
      }
    });
  }

  getIncidenceIndex(incidence: number) {
    let incidenceIndex = 0;
    for(let i = 0; i < this.rules.incidenceRules.length; i++) {
      if(incidence >= this.rules.incidenceRules[i].fromIncidence.value) {
        incidenceIndex = i;
      }
    }
    return incidenceIndex;
  }
}

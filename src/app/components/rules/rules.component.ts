import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RulesSet } from 'src/app/interfaces/rules';
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

  incidenceData;

  rules: RulesSet;

  async onLocationClick($event) {
    this.dataStage = 'loading';
    const location: Coordinates = await this.getPosition();
    this.getData(location).then((result) => {
      this.incidenceData = result;
      this.dataStage = 'loaded';
    });
  }

  onPLZClick(event: Event) {
    let data = this.getCityData(this.plz);
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
      this.getData(location).then((result) => {
        this.incidenceData = result;
        this.dataStage = 'loaded';
      });
    }
  }

  constructor(public api: ApiService) {
    this.rules = {
      lowerIncidence: {
        value: 0
      },
      upperIncidence: {
        value: 0
      },
      contactsInside: {
        where: '',
        contactsNumber: 0,
        remarks: ''
      },
      contactsOutside: {
        where: '',
        contactsNumber: 0,
        remarks: ''
      },
      importantAnnouncement: {
        rule: ''
      },
      specialRules: {
        rule: ''
      },
      masks: {
        isMasks: false,
        where: ''
      },
      closedStores: [{ store: '' }],
      closedInstitutions: [{ institution: '' }],
      goingOutBan: {
        rule: ''
      }
    }
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
          timeline
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

  getCityData(zipcode: string) {
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
}

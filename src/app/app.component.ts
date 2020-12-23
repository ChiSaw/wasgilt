import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WasGilt';
  dataStage: string;
  previousDays = 0;
  stateToAbbr = {};

  incidenceData;

  onLocationClick($event) {
    this.dataStage = 'loading';
    this.getData().then((result) => {
      this.incidenceData = result;
      this.dataStage = 'loaded';
    });
  }

  onPLZClick($event) {

  }

// Licence: Robert Koch-Institut (RKI), dl-de/by-2-0

// Thanks to @rphl (https://github.com/rphl) and @tzschies (https://github.com/tzschies) for their inspiring work on this widget. See https://gist.github.com/rphl/0491c5f9cb345bf831248732374c4ef5 and https://gist.github.com/tzschies/563fab70b37609bc8f2f630d566bcbc9.


  constructor(public api: ApiService) {
    this.dataStage = 'initial';
    this.previousDays = 30;
    this.stateToAbbr = {
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

  async getData() {
     try {
      const location = await this.getPosition();
      if (location) {
        const result: any = await this.api.get_districts(location).toPromise();
        const attr  = result.features[0].attributes;
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
          this.stateToAbbr[attr.BL],
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
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      }, (err) => {
        reject(err);
      });
    });
  }

  sum(a,b) {
    return a + b;
  }
}

import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidenceRulesSet, RulesSet, initIncidenceRulesSet, checkRulesIntegrity, checkIncidenceRulesIntegrity, IncidenceValues } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  states: {};
  selectedState: string;
  rules: RulesSet;
  activeRulesIndex: number;
  incidenceValues: IncidenceValues;
  activeFromIncidence: number;

  constructor(private firestore: FirestoreService, private route: ActivatedRoute, private router: Router) {
    this.activeFromIncidence = 0;
    this.incidenceValues = { values: [0] };
    this.activeRulesIndex = 0;
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
      timestamp: Date.now(),
    };
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
    this.selectedState = '';
  }

  ngOnInit() {
    this.updateRoute();
  }

  updateRoute() {
    this.route.queryParamMap
      .subscribe((params) => {
        if (params.has('state') && this.selectedState != params.get('state')) {
          this.selectedState = params.get('state');
          console.log('New state: ' + params.get('state'))
          this.loadStateRule();
          this.loadStateIncidenceRuleValues();
        }
      })
  }

  loadStateRule() {
    this.firestore.getStateRules(this.selectedState).pipe(
      map(doc =>
        ({ id: doc.id, data: <RulesSet>doc.data() })
      )
    ).subscribe((data) => {
      if (data != undefined && data.data != undefined && data.data.importantAnnouncement != undefined) {
        this.rules = checkRulesIntegrity(data.data);
      } else {
        // Create initial rule array
        this.firestore.storeStateRules(this.selectedState, this.rules);
      }
    });
  }

  loadStateIncidenceRuleValues() {
    this.firestore.getStateIncidenceValues(this.selectedState).pipe(
      map(doc =>
        ({ id: doc.id, data: <IncidenceValues>doc.data() })
      )
    ).subscribe((data) => {
      if (data != undefined && data.data != undefined) {
        this.incidenceValues = data.data;
        this.onIncidenceValuesChange(this.incidenceValues);
      } else {
        // Create initial incidence array
        this.firestore.storeStateIncidenceValues(this.selectedState, this.incidenceValues);
      }
    });
  }

  onStateClicked(state: string) {
    this.router.navigate(['/update'], { queryParams: { state: state } });
    this.updateRoute();
  }

  onUpdateData() {
    this.rules.timestamp = Date.now();
    this.firestore.storeStateIncidenceValues(this.selectedState, this.incidenceValues);
    this.firestore.storeStateRules(this.selectedState, this.rules);
    console.log(this.rules)
  }

  onIncidenceValuesChange(values: IncidenceValues) {
    this.incidenceValues = values;
    let currentLength = this.rules.incidenceRules.length;
    let lengthDifference = currentLength - this.incidenceValues.values.length;
    // Add or delete as many elements in rules array as there incidence values
    for (let i = 0; i < Math.abs(lengthDifference); i++) {
      if (lengthDifference < 0) {
        this.rules.incidenceRules.push(this.rules.incidenceRules[currentLength - 1])
      } else if (lengthDifference > 0) {
        this.rules.incidenceRules.slice(currentLength, 1);
      }
    }
    for(let i = 0; i < this.incidenceValues.values.length; i++) {
      this.rules.incidenceRules[i].fromIncidence.value = this.incidenceValues.values[i];
    }
  }

  swap(json) {
    var ret = {};
    for (var key in json) {
      ret[json[key]] = key;
    }
    return ret;
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { RulesSet, IncidenceValues } from '../interfaces/rules';

const DATABASE = environment.database;
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  constructor(private firestore: AngularFirestore) { }

  getStateRules(state: string) {
    return this.firestore.collection(DATABASE + '/states/' + state).doc('rules').get();
  }
  storeStateRules(state: string, rules: RulesSet) {
    return this.firestore.collection(DATABASE + '/states/' + state). doc('rules').set(rules);
  }

  getStateIncidenceValues(state: string) {
    return this.firestore.collection(DATABASE + '/states/' + state).doc('incidence-values').get();
  }
  storeStateIncidenceValues(state: string, incidenceValues: IncidenceValues) {
    return this.firestore.collection(DATABASE + '/states/' + state).doc('incidence-values').set(incidenceValues);
  }
}

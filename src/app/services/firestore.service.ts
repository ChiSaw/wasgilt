import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getStateRules(state: string) {
    let datebase = environment.database;
    return this.firestore.collection(datebase+'/states/'+state).snapshotChanges();
}
}

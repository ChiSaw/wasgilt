import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  //constructor(private firestore: AngularFirestore) { }
  constructor() { }

  getTest() {
    //return this.firestore.collection('test').snapshotChanges();
}
}

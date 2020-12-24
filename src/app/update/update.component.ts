import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../firestore.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  test: any;

  ngOnInit() {
  }

  constructor(private firestore: FirestoreService) {
      this.test = this.firestore.getTest();
      console.log(this.test);
  }

}

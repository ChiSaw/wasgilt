import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { map } from 'rxjs/operators';

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
      this.test = this.firestore.getStateRules('BY').pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, data: c.payload.doc.data() })
          )
        )
      ).subscribe(data => {
        this.test = data;
        console.log(data);
      });
  }

}

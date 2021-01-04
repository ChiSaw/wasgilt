import { Component, OnInit, Input } from '@angular/core';
import { ClosedStores } from 'src/app/interfaces/rules';
@Component({
  selector: 'app-closed-stores',
  templateUrl: './closed-stores.component.html',
  styleUrls: ['./closed-stores.component.css']
})
export class ClosedStoresComponent implements OnInit {
  @Input() rule: ClosedStores;
  constructor() { }

  ngOnInit(): void {
  }

}

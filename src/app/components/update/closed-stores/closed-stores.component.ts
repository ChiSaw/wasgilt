import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ClosedStores } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-closed-stores-edit',
  templateUrl: './closed-stores.component.html',
  styleUrls: ['./closed-stores.component.css']
})
export class ClosedStoresEditComponent implements OnInit {
  @Input() rule: ClosedStores;
  @Output() ruleChange = new EventEmitter<ClosedStores>();
  newValue: string;

  constructor() {  }

  ngOnInit(): void {
  }
}

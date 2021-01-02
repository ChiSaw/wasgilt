import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ClosedStore } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-closed-stores-edit',
  templateUrl: './closed-stores.component.html',
  styleUrls: ['./closed-stores.component.css']
})
export class ClosedStoresEditComponent implements OnInit {
  @Input() rules: ClosedStore[];
  @Output() rulesChange = new EventEmitter<ClosedStore[]>();
  newValue: string;

  constructor() { this.newValue = ''; }

  ngOnInit(): void {
  }

  deleteStore(index: number) {
    if (index > -1) {
      this.rules.splice(index, 1);
    }
    this.rulesChange.emit(this.rules);
  }

  addStore() {
    let newStore: ClosedStore = {store: ''};
    newStore.store = this.newValue;
    this.rules.push(newStore);
    this.rulesChange.emit(this.rules);
  }
}

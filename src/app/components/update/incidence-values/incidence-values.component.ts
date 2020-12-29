import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IncidenceValues } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-incidence-values',
  templateUrl: './incidence-values.component.html',
  styleUrls: ['./incidence-values.component.css']
})
export class IncidenceValuesComponent implements OnInit {
  @Input() incidenceValues: IncidenceValues;
  @Output() incidenceValuesChange = new EventEmitter<IncidenceValues>();
  newValue: number;

  constructor() { this.newValue = 0; }

  ngOnInit(): void {
    this.sort();
  }

  deleteIncidenceValue(index: number) {
    if (index > -1) {
      this.incidenceValues.values.splice(index, 1);
    }
    this.sort();
    this.incidenceValuesChange.emit(this.incidenceValues);
  }

  addIncidenceValue() {
    this.incidenceValues.values.push(Number(this.newValue));
    this.sort();
    this.incidenceValuesChange.emit(this.incidenceValues);
  }

  sort() { 
    this.incidenceValues.values.sort((a,b) => {return a-b;});
  }

}

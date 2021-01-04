import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ClosedInstitutions } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-closed-institutions-edit',
  templateUrl: './closed-institutions.component.html',
  styleUrls: ['./closed-institutions.component.css']
})
export class ClosedInstitutionsEditComponent implements OnInit {
  @Input() rule: ClosedInstitutions;
  @Output() ruleChange = new EventEmitter<ClosedInstitutions>();
  newValue: string;

  constructor() { this.newValue = ''; }

  ngOnInit(): void {
  }
}

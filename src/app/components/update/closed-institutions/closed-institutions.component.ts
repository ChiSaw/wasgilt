import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ClosedInstitution } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-closed-institutions-edit',
  templateUrl: './closed-institutions.component.html',
  styleUrls: ['./closed-institutions.component.css']
})
export class ClosedInstitutionsEditComponent implements OnInit {
  @Input() rules: ClosedInstitution[];
  @Output() rulesChange = new EventEmitter<ClosedInstitution[]>();
  newValue: string;

  constructor() { this.newValue = ''; }

  ngOnInit(): void {
    console.log(this.rules)
  }

  deleteInstitution(index: number) {
    if (index > -1) {
      this.rules.splice(index, 1);
    }
    this.rulesChange.emit(this.rules);
  }

  addInstitution() {
    let newInstitution: ClosedInstitution = {institution: ''};
    newInstitution.institution = this.newValue;
    this.rules.push(newInstitution);
    this.rulesChange.emit(this.rules);
    console.log(this.rules)
  }
}

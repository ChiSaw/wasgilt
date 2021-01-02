import { Component, OnInit, Input } from '@angular/core';
import { ClosedInstitution } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-closed-institutions',
  templateUrl: './closed-institutions.component.html',
  styleUrls: ['./closed-institutions.component.css']
})
export class ClosedInstitutionsComponent implements OnInit {
  @Input() rules: ClosedInstitution[];
  constructor() { }

  ngOnInit(): void {
  }

}

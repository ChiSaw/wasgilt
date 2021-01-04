import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { PartyRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-culture-rules-edit',
  templateUrl: './culture-rules.component.html',
  styleUrls: ['./culture-rules.component.css']
})
export class CultureRulesEditComponent implements OnInit {
  @Input() rule: PartyRules;
  @Output() ruleChange = new EventEmitter<PartyRules>();
  constructor() { }

  ngOnInit(): void {
  }

}

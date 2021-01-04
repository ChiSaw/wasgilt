import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { PartyRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-party-rules-edit',
  templateUrl: './party-rules.component.html',
  styleUrls: ['./party-rules.component.css']
})
export class PartyRulesEditComponent implements OnInit {
  @Input() rule: PartyRules;
  @Output() ruleChange = new EventEmitter<PartyRules>();
  constructor() { }

  ngOnInit(): void {
  }

}

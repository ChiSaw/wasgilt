import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TravelRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-travel-rule-edit',
  templateUrl: './travel-rule.component.html',
  styleUrls: ['./travel-rule.component.css']
})
export class TravelRuleEditComponent implements OnInit {
  @Input() rule: TravelRules;
  @Output() ruleChange = new EventEmitter<TravelRules>();
  constructor() { }

  ngOnInit(): void {
  }

}

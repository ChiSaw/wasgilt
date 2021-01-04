import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SportsRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-sports-rule-edit',
  templateUrl: './sports-rule.component.html',
  styleUrls: ['./sports-rule.component.css']
})
export class SportsRuleEditComponent implements OnInit {
  @Input() rule: SportsRules;
  @Output() ruleChange = new EventEmitter<SportsRules>();
  constructor() { }

  ngOnInit(): void {
  }

}

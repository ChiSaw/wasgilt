import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MasksRule } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-masks-rule-edit',
  templateUrl: './masks-rule.component.html',
  styleUrls: ['./masks-rule.component.css']
})
export class MasksRuleEditComponent implements OnInit {
  @Input() rule: MasksRule;
  @Output() ruleChange = new EventEmitter<MasksRule>();
  constructor() { }

  ngOnInit(): void {
  }

}

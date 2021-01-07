import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateCommunityRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-community-rules-edit',
  templateUrl: './community-rules.component.html',
  styleUrls: ['./community-rules.component.css']
})
export class CommunityRulesEditComponent implements OnInit {
  @Input() rule: StateCommunityRules;
  @Output() ruleChange = new EventEmitter<StateCommunityRules>();
  constructor() { }

  ngOnInit(): void {
  }

}

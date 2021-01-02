import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SpecialRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-special-rules-edit',
  templateUrl: './special-rules.component.html',
  styleUrls: ['./special-rules.component.css']
})
export class SpecialRulesEditComponent implements OnInit {
  @Input() rule: SpecialRules;
  @Output() ruleChange = new EventEmitter<SpecialRules>();
  constructor() {
  }

  ngOnInit(): void {
  }

}

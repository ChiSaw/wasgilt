import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ContactsRule } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-contact-rule-edit',
  templateUrl: './contact-rule.component.html',
  styleUrls: ['./contact-rule.component.css']
})
export class ContactRuleEditComponent implements OnInit {
  @Input() rule: ContactsRule;
  @Output() ruleChange = new EventEmitter<ContactsRule>();
  constructor() {
  }

  ngOnInit(): void {
  }

}

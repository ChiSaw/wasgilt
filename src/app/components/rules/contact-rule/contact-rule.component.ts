import { Component, Input, OnInit } from '@angular/core';
import { ContactsRule } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-contact-rule',
  templateUrl: './contact-rule.component.html',
  styleUrls: ['./contact-rule.component.css']
})
export class ContactRuleComponent implements OnInit {
  @Input() rule: ContactsRule;
  constructor() { }

  ngOnInit(): void {
  }

}

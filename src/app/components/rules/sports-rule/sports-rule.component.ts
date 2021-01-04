import { Component, OnInit, Input } from '@angular/core';
import { SportsRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-sports-rule',
  templateUrl: './sports-rule.component.html',
  styleUrls: ['./sports-rule.component.css']
})
export class SportsRuleComponent implements OnInit {
  @Input() rule: SportsRules;
  constructor() { }

  ngOnInit(): void {
  }

}

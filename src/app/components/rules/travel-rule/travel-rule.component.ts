import { Component, OnInit, Input } from '@angular/core';
import { TravelRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-travel-rule',
  templateUrl: './travel-rule.component.html',
  styleUrls: ['./travel-rule.component.css']
})
export class TravelRuleComponent implements OnInit {
  @Input() rule: TravelRules;
  constructor() { }

  ngOnInit(): void {
  }

}

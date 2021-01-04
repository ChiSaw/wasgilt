import { Component, OnInit, Input } from '@angular/core';
import { PartyRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-party-rules',
  templateUrl: './party-rules.component.html',
  styleUrls: ['./party-rules.component.css']
})
export class PartyRulesComponent implements OnInit {
  @Input() rule: PartyRules;

  constructor() { }

  ngOnInit(): void {
  }

}

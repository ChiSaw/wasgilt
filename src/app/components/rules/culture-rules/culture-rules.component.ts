import { Component, OnInit, Input } from '@angular/core';
import { CultureRules } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-culture-rules',
  templateUrl: './culture-rules.component.html',
  styleUrls: ['./culture-rules.component.css']
})
export class CultureRulesComponent implements OnInit {
  @Input() rule: CultureRules;

  constructor() { }

  ngOnInit(): void {
  }

}

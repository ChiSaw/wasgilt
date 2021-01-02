import { Component, OnInit, Input } from '@angular/core';
import { SpecialRules } from 'src/app/interfaces/rules';
@Component({
  selector: 'app-special-rules',
  templateUrl: './special-rules.component.html',
  styleUrls: ['./special-rules.component.css']
})
export class SpecialRulesComponent implements OnInit {
  @Input() rule: SpecialRules;
  constructor() { }

  ngOnInit(): void {
  }

}

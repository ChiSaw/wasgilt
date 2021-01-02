import { Component, OnInit, Input } from '@angular/core';
import { MasksRule } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-masks-rule',
  templateUrl: './masks-rule.component.html',
  styleUrls: ['./masks-rule.component.css']
})
export class MasksRuleComponent implements OnInit {
  @Input() rule: MasksRule;
  constructor() { }

  ngOnInit(): void {
  }

}

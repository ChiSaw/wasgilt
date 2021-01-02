import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { GoingOutBan } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-going-out-ban-edit',
  templateUrl: './going-out-ban.component.html',
  styleUrls: ['./going-out-ban.component.css']
})
export class GoingOutBanEditComponent implements OnInit {
  @Input() rule: GoingOutBan;
  @Output() ruleChange = new EventEmitter<GoingOutBan>();
  constructor() { }

  ngOnInit(): void {
  }

}

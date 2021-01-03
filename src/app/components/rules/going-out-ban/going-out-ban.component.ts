import { Component, OnInit, Input } from '@angular/core';
import { GoingOutBan } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-going-out-ban',
  templateUrl: './going-out-ban.component.html',
  styleUrls: ['./going-out-ban.component.css']
})
export class GoingOutBanComponent implements OnInit {
  @Input() rule: GoingOutBan;
  constructor() { }

  ngOnInit(): void {
    console.log(this.rule)
  }

}

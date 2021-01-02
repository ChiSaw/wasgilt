import { Component, OnInit, Input } from '@angular/core';
import { ClosedStore } from 'src/app/interfaces/rules';
@Component({
  selector: 'app-closed-stores',
  templateUrl: './closed-stores.component.html',
  styleUrls: ['./closed-stores.component.css']
})
export class ClosedStoresComponent implements OnInit {
  @Input() rules: ClosedStore[];
  constructor() { }

  ngOnInit(): void {
  }

}

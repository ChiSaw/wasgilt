import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ImportantAnnouncement } from 'src/app/interfaces/rules';

@Component({
  selector: 'app-important-announcement-edit',
  templateUrl: './important-announcement.component.html',
  styleUrls: ['./important-announcement.component.css']
})
export class ImportantAnnouncementEditComponent implements OnInit {
  @Input() rule: ImportantAnnouncement;
  @Output() ruleChange = new EventEmitter<ImportantAnnouncement>();
  constructor() { }

  ngOnInit(): void {
  }

}

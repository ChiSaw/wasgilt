import { Component, OnInit, Input } from '@angular/core';
import { ImportantAnnouncement } from 'src/app/interfaces/rules';
@Component({
  selector: 'app-important-announcement',
  templateUrl: './important-announcement.component.html',
  styleUrls: ['./important-announcement.component.css']
})
export class ImportantAnnouncementComponent implements OnInit {
  @Input() rule: ImportantAnnouncement;
  constructor() { }

  ngOnInit(): void {
  }

}

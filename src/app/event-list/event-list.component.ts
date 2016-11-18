import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  allEvents;
  currentEvents;
  perPage = 10;
  currentPage = 0;


  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.allEvents = this.eventService.getEvents();
    this.currentEvents = this.allEvents;
    // this.currentEvents = this.allEvents.slice(0, this.perPage - 1);
  }

}

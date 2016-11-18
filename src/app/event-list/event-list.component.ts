import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.less']
})
export class EventListComponent implements OnInit {
  allEvents;
  currentEvents;
  pages;
  perPage: number = 5;
  currentPage: number = 1;


  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.allEvents = this.eventService.getEvents();
    this.currentEvents = this.allEvents.slice(0, this.perPage);
    this.pages = Array(Math.ceil(this.allEvents.length / this.perPage)).fill(0).map((x,i) => {return i+1;});
  }

  goToPage(pageNumber: number) {
    if (pageNumber > 0 && pageNumber <= this.pages.length) {
      this.currentPage = pageNumber;
      var startIndex = (this.currentPage - 1) * this.perPage;
      this.currentEvents = this.allEvents.slice(startIndex, startIndex + this.perPage);
      console.log("Page: " + pageNumber + "  from:" +startIndex + " to " + (startIndex + this.perPage));
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  previousPage() {
    this.goToPage(this.currentPage - 1);
  }

}

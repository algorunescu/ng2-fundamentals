import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/events.service';

@Component({
    templateUrl: '/app/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {

    event: any;

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}
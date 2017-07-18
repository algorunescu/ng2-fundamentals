import { EventService } from './shared/events.service';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class EventsListResolverService implements Resolve<any> {

    constructor(private eventService: EventService) {}

    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}
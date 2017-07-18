import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { Error404Component } from './errors/404.component';
import { EventsListResolverService } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]
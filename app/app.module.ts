import { ProfileComponent } from './user/profile.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventService } from './events/shared/events.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { ToastrService } from './common/toastr.service';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        ProfileComponent
    ],
    providers: [
        EventService,
        ToastrService, 
        EventRouteActivatorService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        EventsListResolverService
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel ?');
    }
    
    return true;
}
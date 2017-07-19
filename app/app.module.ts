import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

import {
    EventDetailsComponent,
    EventService,
    EventThumbnailComponent,
    EventsListComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventsListResolverService
} from './events/index'

import { NavBarComponent } from './nav/navbar.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

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
        Error404Component        
    ],
    providers: [
        EventService,
        ToastrService, 
        EventRouteActivatorService,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        EventsListResolverService,
        AuthService
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
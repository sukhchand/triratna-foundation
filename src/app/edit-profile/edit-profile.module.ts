import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { EditProfileComponent } from './edit-profile.component';
import { EditVideosComponent } from './components/edit-videos/edit-videos.component';
import { EditPhotosComponent } from './components/edit-photos/edit-photos.component';
import { EditStoriesComponent } from './components/edit-stories/edit-stories.component';
import { EditEventsComponent } from './components/edit-events/edit-events.component';
import { EditCalendarComponent } from './components/edit-calendar/edit-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from '../calendar/calendar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../login/services/auth-interceptor.service';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    EditNewsComponent,
    EditProfileComponent,
    EditVideosComponent,
    EditPhotosComponent,
    EditStoriesComponent,
    EditEventsComponent,
    EditCalendarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarComponent,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    BrowserAnimationsModule
  ],
  exports: [EditProfileComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class EditProfileModule {}

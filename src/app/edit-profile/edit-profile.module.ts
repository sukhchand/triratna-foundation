import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [EditNewsComponent,EditProfileComponent, EditVideosComponent, EditPhotosComponent, EditStoriesComponent, EditEventsComponent, EditCalendarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[EditProfileComponent]
})
export class EditProfileModule { }

import { LoaderInterceptor } from './shared/spinner/services/interceptors/loader-interceptor.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditGalleryComponent } from './edit-profile/components/edit-gallery/edit-gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeadershipComponent } from './leadership/leadership.component';
import { SupportersComponent } from './supporters/supporters.component';
import { FinancialsComponent } from './financials/financials.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FoodclothsandshelterComponent } from './foodclothsandshelter/foodclothsandshelter.component';
import { HealthhygieneandsanitationComponent } from './healthhygieneandsanitation/healthhygieneandsanitation.component';
import { FreshaircleanwaterComponent } from './freshaircleanwater/freshaircleanwater.component';
import { OrganicsoilandgreenviewComponent } from './organicsoilandgreenview/organicsoilandgreenview.component';
import { SafetyandprotectionComponent } from './safetyandprotection/safetyandprotection.component';
import { AnimalsafetyrightsComponent } from './animalsafetyrights/animalsafetyrights.component';
import { SavechildrenvulnerableandoldComponent } from './savechildrenvulnerableandold/savechildrenvulnerableandold.component';
import { EmergencyreliefsComponent } from './emergencyreliefs/emergencyreliefs.component';
import { EducationandtrainingComponent } from './educationandtraining/educationandtraining.component';
import { TeachingofbuddhaandspiritualityComponent } from './teachingofbuddhaandspirituality/teachingofbuddhaandspirituality.component';
import { RehearsalofpanchasilaComponent } from './rehearsalofpanchasila/rehearsalofpanchasila.component';
import { ForgivenessandreconciliationComponent } from './forgivenessandreconciliation/forgivenessandreconciliation.component';
import { ResearchandinnovationComponent } from './researchandinnovation/researchandinnovation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DonateComponent } from './donate/donate.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AuthInterceptorService } from './login/services/auth-interceptor.service';
import { SharedComponent } from './shared/shared.component';
import { EditNewsComponent } from './edit-profile/components/edit-news/edit-news.component';
import { EditStoriesComponent } from './edit-profile/components/edit-stories/edit-stories.component';
import { EditCalendarComponent } from './edit-profile/components/edit-calendar/edit-calendar.component';
import { EventPopupComponent } from './edit-profile/components/edit-calendar/components/event-popup/event-popup.component';
import { ProfileComponent } from './edit-profile/components/profile/profile.component';
import { AutofocusDirective } from './autofocus/autofocus.directive';
import { AlbumComponent } from './edit-profile/components/edit-gallery/components/album/album.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { StoryPopupComponent } from './edit-profile/components/edit-stories/components/story-popup/story-popup.component';
import { ViewStoryComponent } from './edit-profile/components/edit-stories/components/view-story/view-story.component';
import { FullStoryDetailsComponent } from './stories/components/full-story-details/full-story-details.component';
import { NewsPopupComponent } from './edit-profile/components/edit-news/components/news-popup/news-popup.component';
import { ViewNewsComponent } from './edit-profile/components/edit-news/components/view-news/view-news.component';
import { NewsDetailsComponent } from './news/components/news-details/news-details.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ManageUsersComponent } from './edit-profile/components/manage-users/manage-users.component';
import { CsvModule } from '@ctrl/ngx-csv';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ManageEmailComponent } from './edit-profile/components/manage-email/manage-email.component';
import { UserGroupComponent } from './edit-profile/components/manage-email/components/user-group/user-group.component';
import { UserGroupPopupComponent } from './edit-profile/components/manage-email/components/user-group-popup/user-group-popup.component';
import { SendEmailComponent } from './edit-profile/components/manage-email/components/send-email/send-email.component';
import { ConfirmationPopupComponent } from './shared/confirmation-popup/confirmation-popup.component';
import { AssignConfirmationComponent } from './edit-profile/components/manage-users/components/assign-confirmation/assign-confirmation.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryAlbumComponent } from './gallery/components/gallery-album/gallery-album.component';
import { MonksandnunsComponent } from './volunteers/components/monksandnuns/monksandnuns.component';
import { DevoteeComponent } from './volunteers/components/devotee/devotee.component';
import { WellwishersComponent } from './volunteers/components/wellwishers/wellwishers.component';
import { SponsorsComponent } from './volunteers/components/sponsors/sponsors.component';
import { DonoragencyComponent } from './volunteers/components/donoragency/donoragency.component';
import { PartnersComponent } from './volunteers/components/partners/partners.component';
import { DonorsComponent } from './volunteers/components/donors/donors.component';
import { PoliciesandstandardComponent } from './policiesandstandard/policiesandstandard.component';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LeadershipComponent,
    SupportersComponent,
    FinancialsComponent,
    CareersComponent,
    ContactusComponent,
    FoodclothsandshelterComponent,
    HealthhygieneandsanitationComponent,
    FreshaircleanwaterComponent,
    OrganicsoilandgreenviewComponent,
    SafetyandprotectionComponent,
    AnimalsafetyrightsComponent,
    SavechildrenvulnerableandoldComponent,
    EmergencyreliefsComponent,
    EducationandtrainingComponent,
    TeachingofbuddhaandspiritualityComponent,
    RehearsalofpanchasilaComponent,
    ForgivenessandreconciliationComponent,
    ResearchandinnovationComponent,
    LoginComponent,
    EditProfileComponent,
    DonateComponent,
    CalendarComponent,
    EventsComponent,
    StoriesComponent,
    NewsComponent,
    VideosComponent,
    PhotosComponent,
    SharedComponent,
    EditNewsComponent,
    EditProfileComponent,
    EditStoriesComponent,
    EditCalendarComponent,
    EditGalleryComponent,
    ProfileComponent,
    AlbumComponent,
    EventPopupComponent,
    AutofocusDirective,
    StoryPopupComponent,
    ViewStoryComponent,
    FullStoryDetailsComponent,
    NewsPopupComponent,
    ViewNewsComponent,
    NewsDetailsComponent,
    ManageUsersComponent,
    ManageEmailComponent,
    UserGroupComponent,
    UserGroupPopupComponent,
    SendEmailComponent,
    ConfirmationPopupComponent,
    AssignConfirmationComponent,
    SpinnerComponent,
    GalleryComponent,
    GalleryAlbumComponent,
    MonksandnunsComponent,
    DevoteeComponent,
    WellwishersComponent,
    SponsorsComponent,
    DonoragencyComponent,
    PartnersComponent,
    DonorsComponent,
    PoliciesandstandardComponent,
    TermandconditionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    AngularEditorModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxDatatableModule,
    CsvModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [CalendarComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

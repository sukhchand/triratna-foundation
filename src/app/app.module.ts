import { EditGalleryComponent } from './edit-profile/components/edit-gallery/edit-gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
import { VolunteersComponent } from './volunteers/volunteers.component';
import { DonateComponent } from './donate/donate.component';
import { InformationsComponent } from './informations/informations.component';
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
import { EditEventsComponent } from './edit-profile/components/edit-events/edit-events.component';
import { EditCalendarComponent } from './edit-profile/components/edit-calendar/edit-calendar.component';
import { EventPopupComponent } from './edit-profile/components/edit-calendar/components/event-popup/event-popup.component';
import { ProfileComponent } from './edit-profile/components/profile/profile.component';
import { AutofocusDirective } from './autofocus/autofocus.directive';

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
    VolunteersComponent,
    DonateComponent,
    InformationsComponent,
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
    EditEventsComponent,
    EditCalendarComponent,
    EditGalleryComponent,
    ProfileComponent,
    EventPopupComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [CalendarComponent]
})
export class AppModule { }

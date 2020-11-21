import { ProfileComponent } from './edit-profile/components/profile/profile.component';
import { EditNewsComponent } from './edit-profile/components/edit-news/edit-news.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { NewsComponent } from './news/news.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsComponent } from './events/events.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InformationsComponent } from './informations/informations.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsafetyrightsComponent } from './animalsafetyrights/animalsafetyrights.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EducationandtrainingComponent } from './educationandtraining/educationandtraining.component';
import { EmergencyreliefsComponent } from './emergencyreliefs/emergencyreliefs.component';
import { FinancialsComponent } from './financials/financials.component';
import { FoodclothsandshelterComponent } from './foodclothsandshelter/foodclothsandshelter.component';
import { ForgivenessandreconciliationComponent } from './forgivenessandreconciliation/forgivenessandreconciliation.component';
import { FreshaircleanwaterComponent } from './freshaircleanwater/freshaircleanwater.component';
import { HealthhygieneandsanitationComponent } from './healthhygieneandsanitation/healthhygieneandsanitation.component';
import { HomeComponent } from './home/home.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { OrganicsoilandgreenviewComponent } from './organicsoilandgreenview/organicsoilandgreenview.component';
import { RehearsalofpanchasilaComponent } from './rehearsalofpanchasila/rehearsalofpanchasila.component';
import { ResearchandinnovationComponent } from './researchandinnovation/researchandinnovation.component';
import { SafetyandprotectionComponent } from './safetyandprotection/safetyandprotection.component';
import { SavechildrenvulnerableandoldComponent } from './savechildrenvulnerableandold/savechildrenvulnerableandold.component';
import { SupportersComponent } from './supporters/supporters.component';
import { TeachingofbuddhaandspiritualityComponent } from './teachingofbuddhaandspirituality/teachingofbuddhaandspirituality.component';
import { EditCalendarComponent } from './edit-profile/components/edit-calendar/edit-calendar.component';
import { EditEventsComponent } from './edit-profile/components/edit-events/edit-events.component';
import { EditStoriesComponent } from './edit-profile/components/edit-stories/edit-stories.component';
import { EditVideosComponent } from './edit-profile/components/edit-videos/edit-videos.component';
import { EditPhotosComponent } from './edit-profile/components/edit-photos/edit-photos.component';
import { AuthGuardService } from './login/services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '', component: HomeComponent },
  { path: 'about_us/leadership', component: LeadershipComponent },
  { path: 'about_us/supporters', component: SupportersComponent },
  { path: 'about_us/financials', component: FinancialsComponent },
  { path: 'about_us/careers', component: CareersComponent },
  { path: 'contact_us', component: ContactusComponent },
  { path: 'services/food_cloths_and_shelter', component: FoodclothsandshelterComponent },
  { path: 'services/health_hygiene_and_sanitation', component: HealthhygieneandsanitationComponent },
  { path: 'services/fresh_air_clean_water', component: FreshaircleanwaterComponent },
  { path: 'services/organic_soil_and_green_view', component: OrganicsoilandgreenviewComponent },
  { path: 'services/safety_and_protection', component: SafetyandprotectionComponent },
  { path: 'services/animal_safety_rights', component: AnimalsafetyrightsComponent },
  { path: 'services/save_children_vulnerable_and_old', component: SavechildrenvulnerableandoldComponent },
  { path: 'services/emergency_reliefs', component: EmergencyreliefsComponent },
  { path: 'services/education_and_training', component: EducationandtrainingComponent },
  { path: 'services/teaching_of_buddha_and_spirituality', component: TeachingofbuddhaandspiritualityComponent },
  { path: 'services/rehearsal_of_panchasila', component: RehearsalofpanchasilaComponent },
  { path: 'services/forgiveness_and_reconciliation', component: ForgivenessandreconciliationComponent },
  { path: 'services/research_and_innovation', component: ResearchandinnovationComponent },
  { path: 'edit-profile',
   component: EditProfileComponent,
   canActivate: [AuthGuardService],
   children: [
    {
      path: '',
      redirectTo: 'profile',
      canActivate: [AuthGuardService]
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'calendar',
      component: EditCalendarComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'events',
      canActivate: [AuthGuardService],
      component: EditEventsComponent
    },
    {
      path: 'stories',
      canActivate: [AuthGuardService],
      component: EditStoriesComponent
    },
    {
      path: 'news',
      canActivate: [AuthGuardService],
      component: EditNewsComponent
    },
    {
      path: 'videos',
      canActivate: [AuthGuardService],
      component: EditVideosComponent
    },
    {
      path: 'photos',
      canActivate: [AuthGuardService],
      component: EditPhotosComponent
    }
   ]
  },
  { path: 'volunteers', component: VolunteersComponent},
  { path: 'informations', component: InformationsComponent},
  { path: 'informations/calendar', component: CalendarComponent},
  { path: 'informations/events', component: EventsComponent},
  { path: 'informations/stories', component: StoriesComponent},
  { path: 'informations/news', component: NewsComponent},
  { path: 'informations/videos', component: VideosComponent},
  { path: 'informations/photos', component: PhotosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'supporters', component: SupportersComponent },
  { path: 'financials', component: FinancialsComponent },
  { path: 'careers', component: CareersComponent },
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
]

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
    ResearchandinnovationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'supporters', component: SupportersComponent },
  { path: 'financials', component: FinancialsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact_us', component: ContactusComponent },
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
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

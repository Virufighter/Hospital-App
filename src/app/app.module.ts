import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientDeletehComponent } from './patient-deleteh/patient-deleteh.component';
import { RouterModule, Routes } from '@angular/router';
const myrout:Routes=[
  {
    path:"",
    component:PatiententryComponent
  },
  {
    path:"search",
    component:PatientsearchComponent
  },
  {
    path:"delete",
    component:PatientDeletehComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientsearchComponent,
    PatientDeletehComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

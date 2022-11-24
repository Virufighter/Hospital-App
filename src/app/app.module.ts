import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientDeletehComponent } from './patient-deleteh/patient-deleteh.component';

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientsearchComponent,
    PatientDeletehComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

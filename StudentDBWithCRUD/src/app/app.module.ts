import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp } from 'firebase/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
    ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }

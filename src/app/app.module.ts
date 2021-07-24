import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GradeComponent, AttendComponent, ExamComponent, AdminComponent, HomeComponent, StudentComponent, EnrollComponent, TeacherComponent } from './_pages';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    GradeComponent,
    ExamComponent,
    AttendComponent,
    TeacherComponent,
    StudentComponent,
    EnrollComponent  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

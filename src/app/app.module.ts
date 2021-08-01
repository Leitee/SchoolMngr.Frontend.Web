import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GradeComponent, AttendComponent, ExamComponent, AdminComponent, HomeComponent, StudentComponent, EnrollComponent, TeacherComponent } from './_pages';
import { routing } from './app.routing';
import { SharedModule } from './shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfigService, JwtInterceptor } from './_commons';
import { LoaderInterceptor, MessageDialogInterceptor } from './_components';

export function initConfig(config: AppConfigService) {
  return () => config.load();
}

@NgModule({
  declarations: [
    //TODO: put into pages component
    AppComponent,
    HomeComponent,
    AdminComponent,
    GradeComponent,
    ExamComponent,
    AttendComponent,
    TeacherComponent,
    StudentComponent,
    EnrollComponent,

    //TODO: put into components module
    // MenuComponent,
    // ContentWrapperComponent,
    // LoaderComponent,
    // DataTableComponent

  ],
  imports: [
    routing,    
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: initConfig,
        deps: [AppConfigService],
        multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MessageDialogInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

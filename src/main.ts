import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { HttpClient } from '@angular/common/http';
// import { importProvidersFrom } from '@angular/core';
// import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [importProvidersFrom(HttpClient)],
//   }).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient()]
// }).catch((err) => console.error(err));
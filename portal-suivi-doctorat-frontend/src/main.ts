// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Importez votre appConfig
import { AppComponent } from './app/app'; // Importez votre composant racine

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

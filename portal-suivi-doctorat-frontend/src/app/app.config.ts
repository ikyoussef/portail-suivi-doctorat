// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // Importez withInterceptors

import { routes } from './app.routes'; // Importez vos routes
// @ts-ignore
import { jwtInterceptor } from './auth/jwt.interceptor'; // Importez votre intercepteur fonctionnel

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Fournit le service de routage avec vos routes
    provideHttpClient(
      withInterceptors([jwtInterceptor]) // Configure HttpClient avec l'intercepteur JWT
    )
    // Ici, vous n'avez pas besoin de fournir AuthService ou AuthGuard
    // car ils sont soit "providedIn: 'root'" pour les services,
    // soit utilisés comme fonction dans `canActivate` pour les gardes.
  ]
};

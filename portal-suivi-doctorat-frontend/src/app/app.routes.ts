// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';          // Importez vos composants autonomes
import { RegisterComponent } from './auth/register/register';  // Importez vos composants autonomes
import { HomeComponent } from './home/home';                // Importez vos composants autonomes
import { authGuard } from './auth/auth-guard';              // Importez votre garde de route fonctionnel

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard] // Utilise le garde de route fonctionnel
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige par défaut vers /home
  { path: '**', redirectTo: '/home' } // Gère les chemins inconnus en redirigeant vers /home
];

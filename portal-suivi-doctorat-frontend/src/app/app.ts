// src/app/app.ts (ou app.component.ts)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ajout de CommonModule
import { RouterOutlet, RouterModule } from '@angular/router'; // Ajout de RouterOutlet, RouterModule
import { AuthService } from './auth/auth'; // Chemin adapté

@Component({
  selector: 'app-root',
  standalone: true, // IMPORTANT : Déclare le composant comme autonome
  imports: [CommonModule, RouterOutlet, RouterModule], // Modules nécessaires
  templateUrl: './app.html', // Chemin adapté
  styleUrls: ['./app.scss']  // Chemin adapté
})
export class AppComponent {
  title = 'portal-suivi-doctorat-frontend';

  constructor(public authService: AuthService) {}
}

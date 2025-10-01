// src/app/home/home.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth'; // Chemin adapté

@Component({
  selector: 'app-home',
  templateUrl: './home.html', // Chemin adapté
  styleUrls: ['./home.scss']  // Chemin adapté
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}

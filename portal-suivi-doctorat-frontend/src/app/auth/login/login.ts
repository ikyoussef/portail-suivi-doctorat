// src/app/auth/login/login.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Ajout de RouterModule
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Ajout de ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Ajout de CommonModule
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true, // IMPORTANT : Déclare le composant comme autonome
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // Modules nécessaires
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.errorMessage = null;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Login failed. Please check your credentials.';
          console.error('Login error:', err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}

// src/app/auth/register/register.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Ajout de RouterModule
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Ajout de ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Ajout de CommonModule
import { AuthService } from '../auth';

@Component({
  selector: 'app-register',
  standalone: true, // IMPORTANT : Déclare le composant comme autonome
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // Modules nécessaires
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'Registration successful! You can now log in.';
          this.registerForm.reset();
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Registration failed.';
          console.error('Register error:', err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields and ensure they are valid.';
    }
  }
}

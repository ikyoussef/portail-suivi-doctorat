// src/app/auth/auth.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface LoginResponse {
  jwtToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // L'URL de l'API Gateway que nous avons configurée pour router vers service-utilisateurs
  private apiUrl = 'http://localhost:8080/api/users/auth';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  private checkAuthStatus() {
    // Vérifie si un token existe au démarrage de l'application
    const token = localStorage.getItem('jwt_token');
    this.isAuthenticatedSubject.next(!!token);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: LoginResponse) => {
        if (response && response.jwtToken) {
          localStorage.setItem('jwt_token', response.jwtToken);
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']); // Rediriger vers la page de connexion après la déconnexion
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from '../../../models/auth/loginrequest';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginRequest: LoginRequest = {
    username: '',
    password: '',
  };
  error: string | null = null;

  constructor(private router: Router, private auth: AuthService) { }

  onLogin() {
    const foundUser = this.auth.login(this.loginRequest);

    if (!foundUser) {
      this.error = 'Invalid username or password. Please try again.';
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    this.router.navigate(['/dashboard']);
  }

  onRegister() {
    this.router.navigate(['/auth/register']);
  }
}

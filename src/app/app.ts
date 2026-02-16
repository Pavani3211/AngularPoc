
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/components/navbar/navbar';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Sidebar, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  
  constructor(private authService: AuthService) {
  }

  isAuthPage(): boolean {
    return this.authService.isLoggedIn();
  }

}

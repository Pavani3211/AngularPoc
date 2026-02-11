
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterModule, Sidebar,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor(public router:Router) {
  }
 isAuthPage(): boolean {
   const url = this.router.url;
  return url.includes('/auth') || url.includes('/login') || url.includes('/register');
  }
  
}

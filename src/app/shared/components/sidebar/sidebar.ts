import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  constructor(private router: Router) {

  }
  onLogout() {
    if (confirm("Logout?")) {
      this.router.navigate(['auth/login']);
    }
  }
}

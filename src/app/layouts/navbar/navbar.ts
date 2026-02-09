// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   imports: [],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.css',
// })
// export class Navbar {

// }
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <div class="logo">Student Portal</div>
      <ul class="nav-links">
        <li><a routerLink="/login">Login</a></li>
        <li><a routerLink="/registration">Register</a></li>
        <li><a routerLink="/studentlist">View List</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar { display: flex; justify-content: space-between; padding: 1rem; background: #333; color: white; }
    .nav-links { list-style: none; display: flex; gap: 20px; }
    .nav-links a { color: white; text-decoration: none; cursor: pointer; }
    .nav-links a:hover { text-decoration: underline; }
  `]
})
export class Navbar {}

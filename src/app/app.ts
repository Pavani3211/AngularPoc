
// import { Component } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { RouterOutlet } from '@angular/router';
// import { Sidebar } from './layouts/sidebar/sidebar';
// import { Navbar } from './layouts/navbar/navbar';



// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,Sidebar,Navbar],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
  
//  isLoginPage = false;

//   constructor(private router: Router) {
//     this.router.events
//       .pipe(filter(event => event instanceof NavigationEnd))
//       .subscribe((event: any) => {
//         this.isLoginPage = event.urlAfterRedirects.includes('/login');
//       });
//   }

// }
import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showSidebar = false;

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Hide sidebar on Login and Registration screens
      const hideScreens = ['/login', '/registration', '/'];
      this.showSidebar = !hideScreens.includes(event.url);
    });
  }

  onLogout() {
    if(confirm("Logout?")) {
      this.router.navigate(['/login']);
    }
  }
}

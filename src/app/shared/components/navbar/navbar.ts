import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LoggedInUser } from '../../../models/auth/loggedInUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  loggedInUser: LoggedInUser = { email: '', name: '' };

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.loggedInUser = this.authService.getLoggedInUser() as LoggedInUser;
  }
}

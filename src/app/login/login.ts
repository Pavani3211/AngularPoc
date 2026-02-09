import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Binded to [(ngModel)] in your table
  username = '';
  password = '';

  private router = inject(Router);

  onLogin() {
    // 1. Get the list of all registered students
    const data = localStorage.getItem('studentList');

    if (data) {
      const studentsArray = JSON.parse(data);

      // 2. Search the array for a matching user
      // Matches 'name' and 'password' saved during registration
      const foundUser = studentsArray.find((student: any) => 
        student.name === this.username && student.password === this.password
      );

      if (foundUser) {
        alert(`Welcome back, ${foundUser.name}!`);
        
        // 3. Store the logged-in user session
        localStorage.setItem('currentUser', JSON.stringify(foundUser));

        // 4. Navigate to the list/dashboard
        this.router.navigate(['/dashboard']); 
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } else {
      alert('No accounts found. Please register first.');
      this.onRegister();
    }
  }

  onRegister() {
    this.router.navigate(['/registration']);
  }
}

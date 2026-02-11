import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  private router = inject(Router);

  onLogin() {

    const data = localStorage.getItem('studentList');
    if (!data || data === '[]') {
      alert('No user found! Please register.');
      this.onRegister();
      return;
    }

    const studentsArray = JSON.parse(data);
    const foundUser = studentsArray.find((student: any) =>
      student.name === this.username && student.password === this.password
    );

    if (foundUser) {
      alert(`Welcome back, ${foundUser.name}!`);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      this.router.navigate(['/dashboard/dashboard']);
    } else {

      alert('Invalid username or password');
    }
  }

  onRegister() {
    this.router.navigate(['/auth/register']);
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/students.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';

  
  private router = inject(Router);
  private studentService = inject(StudentService);

  onLogin() {

    const studentsArray = this.studentService.getStudents();

    if (studentsArray.length === 0) {
      alert('No users found! Redirecting to Registration.');
      this.onRegister();
      return;
    }

    const foundUser = studentsArray.find((student: any) =>
      student.studentname === this.username && student.password === this.password
    );

    if (foundUser) {
   
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      alert(`Login Successful! Welcome ${foundUser.studentname}`);
      
      this.router.navigate(['/dashboard/dashboard']); 
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

  onRegister() {
    this.router.navigate(['/auth/register']);
  }
}

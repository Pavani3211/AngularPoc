import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false, 
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class Registration {
  username = '';
  age = '';
  gender = '';
  email = '';
  stdClass = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
  
    if (this.username && this.password) {
    
      const newStudent = {
        name: this.username, 
        age: this.age,
        gender: this.gender,
        email: this.email,
        stdClass: this.stdClass,
        password: this.password
      };
      const existingData = localStorage.getItem('studentList');
      const students = existingData ? JSON.parse(existingData) : [];
      students.push(newStudent);
      localStorage.setItem('studentList', JSON.stringify(students));

      alert('Registration Successful! Redirecting to Login...');
      this.router.navigate(['/auth/login']);
    } else {
      alert('Error: Name and Password are required!');
    }
  }
}

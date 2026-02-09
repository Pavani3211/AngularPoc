import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,                // ✅ REQUIRED for `imports: []`
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css'], // ✅ plural
})
export class Registration {
  name = '';
  age = '';
  gender = '';
  email = '';
  stdClass = '';
  password = '';

  constructor(private router: Router) {}

 // registration.ts
onRegister() {
  if (this.name && this.email && this.password) {
    const newStudent = {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
      stdClass: this.stdClass,
      password: this.password
    };

    // 1. Get existing data or an empty array if none exists
    const existingData = localStorage.getItem('studentList');
    const students = existingData ? JSON.parse(existingData) : [];

    // 2. Add new student to the array
    students.push(newStudent);

    // 3. Save the full array back to localStorage
    localStorage.setItem('studentList', JSON.stringify(students));

     alert('Registration Successful! Please login to continue.');
    this.router.navigate(['/login']);
  } else {
    alert('Please fill in the required fields!');
  }
}
}
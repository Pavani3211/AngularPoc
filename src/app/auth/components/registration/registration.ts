import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/students.service';
import { Student } from '../../../models/student';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class RegisterComponent {
  studentname: string = '';
  age: string = '';
  gender: string = '';
  email: string = '';
  class: string = '';
  password: string = '';

  constructor(
    private studentService: StudentService, 
    private router: Router
  ) {}

  onRegister() {
 
    if (!this.studentname || !this.email || !this.password) {
      alert("Please fill in the required fields (Name, Email, and Password)");
      return;
    }

    const newStudent = new Student({
      studentname: this.studentname,
      age: this.age,
      gender: this.gender,
      email: this.email,
      class: this.class,
      password: this.password
    });

    this.studentService.createStudent(newStudent);
    localStorage.setItem('isLoggedIn', 'true');

    alert("Registration Successful!");
  
    this.router.navigate(['/dashboard']);
  }
}

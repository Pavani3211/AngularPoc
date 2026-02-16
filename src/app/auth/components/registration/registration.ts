import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/students.service';
import { Student } from '../../../models/student';
import { StudentRequest } from '../../../models/auth/registerRequest';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class RegisterComponent {
  studentRequest: StudentRequest = { name: '', age: '', class: '', email: '', gender: '', password: '' } as StudentRequest;
  error: string = '';

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  onRegister() {
    if (!this.validateForm()) {
      return;
    }

    let studentReq = new Student(this.studentRequest);
    let student = this.studentService.createStudent(studentReq);
    if(!student.id){
      this.error = 'Unable to register user. please try again.';
      return;
    }

    this.router.navigate(['/auth/login']);
  }

  private validateForm(): boolean {
    if (!this.studentRequest.name
      || !this.studentRequest.age
      || !this.studentRequest.class
      || !this.studentRequest.email
      || !this.studentRequest.gender
      || !this.studentRequest.password) {
        this.error = 'Please fill all the required fields.'
        return false;
    }

    return true;
  }
}

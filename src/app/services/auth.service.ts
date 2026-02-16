import { Injectable } from '@angular/core';
import { StudentService } from './students.service';
import { Student } from '../models/student';
import { LoginRequest } from '../models/auth/loginrequest';

@Injectable({ providedIn: 'root' })
export class AuthService {
 
  constructor(private studentService: StudentService) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
  }

  login(loginRequest: LoginRequest): Student | null {
    const studentsArray = this.studentService.getStudents();

    return studentsArray.find((student: any) =>
      student.studentname === loginRequest.username && student.password === loginRequest.password
    ) || null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}

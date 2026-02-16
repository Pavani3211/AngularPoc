import { Injectable } from '@angular/core';
import { StudentService } from './students.service';
import { Student } from '../models/student';
import { LoginRequest } from '../models/auth/loginrequest';
import { LoggedInUser } from '../models/auth/loggedInUser';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private studentService: StudentService) { }

  isLoggedIn(): boolean {
    return !!this.getLoggedInUser();
  }

  getLoggedInUser() {
    const loggedInUserJson = localStorage.getItem('currentUser');
    if (!!loggedInUserJson) {
      return JSON.parse(loggedInUserJson) as LoggedInUser;
    }

    return null;
  }

  login(loginRequest: LoginRequest): LoggedInUser | null {
    const studentsArray = this.studentService.getStudents();
    const loggedInUser = studentsArray.find((student: Student) =>
      student.email === loginRequest.username && student.password === loginRequest.password
    ) || null;
    if (!!loggedInUser) {
      const user = { email: loggedInUser.email, name: loggedInUser.name } as LoggedInUser; 4
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }

    return null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}

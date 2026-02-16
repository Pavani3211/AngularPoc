import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { v4 as uuidv4 } from 'uuid'; 

@Injectable({ providedIn: 'root' })
export class StudentService {
  private storageKey = 'Students';

  getStudents(): Student[] {
    const data = localStorage.getItem(this.storageKey);
    const raw = data ? JSON.parse(data) : [];
    return raw.map((s: any) => new Student(s));
  }

  createStudent(student: Student): void {
    const list = this.getStudents();
    student.id = uuidv4();
    list.push(student);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  updateStudent(updated: Student): void {
    const list = this.getStudents();
    const index = list.findIndex(s => s.id === updated.id);
    if (index > -1) {
      list[index] = updated;
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    }
  }

  deleteStudent(id: string): void {
    const list = this.getStudents().filter(s => s.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }
}

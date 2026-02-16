import { Injectable } from '@angular/core';
import { Teacher } from '../models/teachers/teacher';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TeacherService {

private StorageKeys='Teachers'

  getAllTeachers(): Array<Teacher> {
    return this.getLocalTeachers();
  }

  createTeacher(teacher: Teacher): Teacher {
    let teachers = this.getLocalTeachers();
    teacher.id = uuidv4();
    teachers.push(teacher);
    this.saveLocalTeachers(teachers);
    return teacher;
  }

  updateTeacher(teacher: Teacher): Teacher {
    let existingTeachers = this.getLocalTeachers();
    const eTeacherindex = existingTeachers.findIndex(eTeacher => eTeacher.id == teacher.id);
    if (eTeacherindex > -1) {
      existingTeachers[eTeacherindex] = teacher;
      this.saveLocalTeachers(existingTeachers);
    }

    return teacher;
  }

  getLocalTeachers(): Array<Teacher> {
    const teachersJson = localStorage.getItem(this.StorageKeys);
    const teachers = !!teachersJson ? JSON.parse(teachersJson) : [];
    return teachers.map((teacher: any) => new Teacher(teacher));
  }

  saveLocalTeachers(teachers: Array<Teacher>) {
    const teachersJson = JSON.stringify(teachers);
    return localStorage.setItem(this.StorageKeys, teachersJson);
  }

 deleteTeacher(id: string): void {
  const teachers = this.getLocalTeachers().filter(teacher => teacher.id !== id);
  this.saveLocalTeachers(teachers);
}

}
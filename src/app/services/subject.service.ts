import { Injectable } from '@angular/core';
import { Subject } from '../models/teachers/teacher'; 
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class SubjectService {

  private storageKey = 'Subjects';

  getSubjects(): Array<Subject> {
    const subjectsJson = localStorage.getItem(this.storageKey);
  
    const data = subjectsJson ? JSON.parse(subjectsJson) : [];
  
    return data.map((item: any) => new Subject(item));
  }

  createSubject(subject: Subject): void {
    const subjects = this.getSubjects();

    subject.id = uuidv4();
    subjects.push(subject);
    this.saveToLocal(subjects);
  }

  deleteSubject(id: string): void {
    let subjects = this.getSubjects();
   
    subjects = subjects.filter(s => s.id !== id);
    this.saveToLocal(subjects);
  }

 
  private saveToLocal(subjects: Array<Subject>): void {
    localStorage.setItem(this.storageKey, JSON.stringify(subjects));
  }
}

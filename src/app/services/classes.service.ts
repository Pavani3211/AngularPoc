import { Injectable } from '@angular/core';
import { StorageKeys } from '../constants/constants';
import { Class } from '../models/class';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class ClassesService {
  storageKey = StorageKeys.Classes;

  getAllClasses(): Array<Class> {
    const json = localStorage.getItem(this.storageKey);
    const data = json ? JSON.parse(json) : [];
    return data.map((item: any) => new Class(item));
  }

 
  createClass(newClass: Class): Class {
    const classes = this.getAllClasses();
    newClass.id = uuidv4(); 
    classes.push(newClass);
    this.saveLocalClasses(classes);
    return newClass;
  }

 
  updateClass(updatedClass: Class): Class {
    const classes = this.getAllClasses();
    const index = classes.findIndex(c => c.id === updatedClass.id);
    
    if (index > -1) {
      classes[index] = updatedClass;
      this.saveLocalClasses(classes);
    }
    return updatedClass;
  }

  deleteClass(id: string): void {
    const classes = this.getAllClasses().filter(c => c.id !== id);
    this.saveLocalClasses(classes);
  }

  private saveLocalClasses(classes: Array<Class>): void {
    const json = JSON.stringify(classes);
    localStorage.setItem(this.storageKey, json);
  }
}

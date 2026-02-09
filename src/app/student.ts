import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Student {
  // Simple functions to Save and Get data
  saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): any[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
}

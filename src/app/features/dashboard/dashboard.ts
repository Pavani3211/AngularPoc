
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  totalStudents = 0;
  totalTeachers = 0;
  totalClasses = 0;

  ngOnInit() {
    
    const studentData = localStorage.getItem('studentList');
    const students = studentData ? JSON.parse(studentData) : [];
    this.totalStudents = students.length;
  }
}

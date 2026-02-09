import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-studentslist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.css',
})
export class Studentslist implements OnInit {
  // Initialize as an empty array
  students: any[] = [];

  ngOnInit() {
    // Must match the key 'studentList' used in your Registration screen
    const data = localStorage.getItem('studentList');
    
    if (data) {
      this.students = JSON.parse(data);
    }
  }

  // A small function to delete one student (to impress your TL)
  deleteStudent(index: number) {
    const isConfirmed = confirm("Are you sure you want to delete this student?");
    this.students.splice(index, 1); // Remove from array
    localStorage.setItem('studentList', JSON.stringify(this.students)); // Update storage
  }
}

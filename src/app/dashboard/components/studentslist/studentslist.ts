import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-studentslist',
  standalone:false,
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.css',
})
export class Studentslist implements OnInit {
 
  students: any[] = [];

  ngOnInit() {

    const data = localStorage.getItem('studentList');
    
    if (data) {
      this.students = JSON.parse(data);
    }
  }

  deleteStudent(index: number) {
    const isConfirmed = confirm("Are you sure you want to delete this student?");
    this.students.splice(index, 1); 
    localStorage.setItem('studentList', JSON.stringify(this.students)); 
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/students.service';

@Component({
  selector: 'app-studentslist',
  standalone: false,
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.scss'
})
export class StudentslistComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = new Student({});
  
  showModal: boolean = false;     
  isEditMode: boolean = false;
  showDeleteModal: boolean = false; 
  studentToDeleteId: string = ''; 

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
 
    this.students = this.studentService.getStudents();
  }
  openAddModal() {
    this.isEditMode = false;
    this.newStudent = new Student({}); 
    this.showModal = true;
  }

  startEdit(student: Student) {
    this.isEditMode = true;
    this.showModal = true;

    this.newStudent = new Student({ ...student });
  }


  saveStudent() {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.newStudent);
    } else {
      this.studentService.createStudent(this.newStudent);
    }
    this.closeModal(); 
    this.loadData();  
  }

  closeModal() {
    this.showModal = false;
    this.newStudent = new Student({});
    this.isEditMode = false;
  }

  deleteStudent(id: string) {
    this.studentToDeleteId = id;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.studentToDeleteId) {
      this.studentService.deleteStudent(this.studentToDeleteId);
      this.closeDeleteModal();
      this.loadData();
    }
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.studentToDeleteId = '';
  }
}

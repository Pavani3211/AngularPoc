import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../services/students.service';
import { TeacherService } from '../../../services/teacher.service';
import { ClassesService } from '../../../services/classes.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  totalStudents = 0;
  totalTeachers = 0;
  totalClasses = 0;

  private studentService = inject(StudentService);
  private teacherService = inject(TeacherService);
  private classService = inject(ClassesService);

  ngOnInit() {
    this.calculateTotals();
  }

  calculateTotals() {
 
    const students = this.studentService.getStudents();
    this.totalStudents = students.length;

    const teachers = this.teacherService.getAllTeachers();
    this.totalTeachers = teachers.length;

    const classes = this.classService.getAllClasses();
    this.totalClasses = classes.length;
  }
}

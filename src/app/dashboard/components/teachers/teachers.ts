import { Component, OnInit } from '@angular/core';
import { Teacher, Subject } from '../../../models/teachers/teacher';
import { TeacherService } from '../../../services/teacher.service';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-teachers',
  standalone: false,
  templateUrl: './teachers.html',
  styleUrl: './teachers.scss'
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];
  subjects: Subject[] = [];
  newTeacher: Teacher = new Teacher({});
 
  showDeleteModal: boolean = false;
  selectedTeacherId: string | null = null;

  constructor(
    private teacherService: TeacherService,
    private subjectService: SubjectService 
  ) {}

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData() {
    this.teachers = this.teacherService.getAllTeachers();
    this.subjects = this.subjectService.getSubjects(); 
  }

  onSubjectChange(id: string) {
    const sub = this.subjects.find(s => s.id === id);
    if (sub) {
      this.newTeacher.subjectName = sub.name;
    }
  }

  saveTeacher() {
    this.teacherService.createTeacher(this.newTeacher);
    this.newTeacher = new Teacher({});
    this.loadAllData();
  }

  editTeacher(updatedTeacher: Teacher) {

    this.newTeacher = new Teacher({ ...updatedTeacher });
  }


  prepareDelete(id: string) {
    this.selectedTeacherId = id;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.selectedTeacherId) {
      this.teacherService.deleteTeacher(this.selectedTeacherId);
      this.closeDeleteModal();
      this.loadAllData(); 
    }
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.selectedTeacherId = null;
  }
}

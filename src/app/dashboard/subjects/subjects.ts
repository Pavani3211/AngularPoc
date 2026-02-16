import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/teachers/teacher'; // Adjust path to your model
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-subject-master',
  standalone: false,
  templateUrl: './subjects.html',
  styleUrl: './subjects.scss'
})
export class SubjectComponent implements OnInit {

  subjects: Subject[] = []; 
  newSubject: Subject = new Subject({});

  showModal: boolean = false;
  showDeleteModal: boolean = false;
  subjectToDeleteId: string = '';

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
 
    this.subjects = this.subjectService.getSubjects();
  }

  openAddModal() {
    this.newSubject = new Subject({});
    this.showModal = true;
  }

  saveSubject() {
    if (this.newSubject.name && this.newSubject.name.trim()) {
      this.subjectService.createSubject(this.newSubject);
      this.closeModal();
      this.loadData();
    }
  }

  closeModal() {
    this.showModal = false;
    this.newSubject = new Subject({});
  }

  prepareDelete(id: string) {
    this.subjectToDeleteId = id;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.subjectToDeleteId) {
      this.subjectService.deleteSubject(this.subjectToDeleteId);
      this.closeDeleteModal();
      this.loadData();
    }
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.subjectToDeleteId = '';
  }
}

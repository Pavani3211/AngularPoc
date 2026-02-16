import { Component, OnInit } from '@angular/core';
import { Class } from '../../../models/class';
import { ClassesService } from '../../../services/classes.service';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.html',
  styleUrl: './classes.scss'
})
export class ClassComponent implements OnInit {

  classList: Class[] = [];
  newClass: Class = new Class({});
  
  isEditMode: boolean = false;
  showDeleteModal: boolean = false;
  classToDeleteId: string | null = null; 

  constructor(private classService: ClassesService) { }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this.classList = this.classService.getAllClasses();
  }

  
  saveClass() {
    if (!this.newClass.classname || !this.newClass.roomno) {
      alert("Please fill in both Class Name and Room Number");
      return;
    }

    if (this.isEditMode) {
      this.classService.updateClass(this.newClass);
    } else {
      this.classService.createClass(this.newClass);
    }

    this.resetForm();
    this.loadClasses();
  }


  editClass(classObj: Class) {
    this.isEditMode = true;
 
    this.newClass = new Class({ ...classObj });
  }

  
  deleteClass(id: string) {
    this.classToDeleteId = id;
    this.showDeleteModal = true;
  }

  
  confirmDelete() {
    if (this.classToDeleteId) {
      this.classService.deleteClass(this.classToDeleteId);
      this.closeDeleteModal();
      this.loadClasses();
    }
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.classToDeleteId = null;
  }

  resetForm() {
    this.newClass = new Class({});
    this.isEditMode = false;
  }
}

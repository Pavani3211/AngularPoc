// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-teachers',
// //   imports: [],
// //   templateUrl: './teachers.html',
// //   styleUrl: './teachers.css',
// // })
// // export class Teachers {

// // }
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-teachers',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './teachers.html',
//   styleUrl: './teachers.css'
// })
// export class Teachers implements OnInit {
//   teachers: any[] = [];
  
//   // Form fields
//   teacherName = '';
//   subject = '';
//   experience = '';

//   ngOnInit() {
//     this.loadTeachers();
//   }

//   loadTeachers() {
//     const data = localStorage.getItem('teacherList');
//     this.teachers = data ? JSON.parse(data) : [];
//   }

//   addTeacher() {
//     if (this.teacherName && this.subject) {
//       const newTeacher = {
//         id: Date.now(),
//         name: this.teacherName,
//         subject: this.subject,
//         experience: this.experience
//       };
//       this.teachers.push(newTeacher);
//       localStorage.setItem('teacherList', JSON.stringify(this.teachers));
      
//       // Clear form
//       this.teacherName = '';
//       this.subject = '';
//       this.experience = '';
//       alert('Teacher added successfully!');
//     }
//   }

//   deleteTeacher(id: number) {
//     if (confirm("Remove this teacher?")) {
//       this.teachers = this.teachers.filter(t => t.id !== id);
//       localStorage.setItem('teacherList', JSON.stringify(this.teachers));
//     }
//   }
// }

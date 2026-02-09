// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-classes',
//   imports: [],
//   templateUrl: './classes.html',
//   styleUrl: './classes.css',
// })
// export class Classes {

// }
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './classes.html',
  styleUrl: './classes.css'
})
export class Classes implements OnInit {
  classList: any[] = [];
  className = '';
  roomNumber = '';

  ngOnInit() {
    const data = localStorage.getItem('classList');
    this.classList = data ? JSON.parse(data) : [];
  }

  addClass() {
    if (this.className && this.roomNumber) {
      const newClass = { id: Date.now(), name: this.className, room: this.roomNumber };
      this.classList.push(newClass);
      localStorage.setItem('classList', JSON.stringify(this.classList));
      this.className = ''; this.roomNumber = '';
    }
  }
}

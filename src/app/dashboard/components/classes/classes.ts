import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  standalone: false,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { DashboardRoutingModule } from './dashboard-routing-module';
import { ClassComponent } from './components/classes/classes';
import {  StudentslistComponent } from './components/studentslist/studentslist';
import { TeacherComponent } from './components/teachers/teachers';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subjects/subjects';


@NgModule({
  declarations: [
     TeacherComponent,ClassComponent,SubjectComponent,StudentslistComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }

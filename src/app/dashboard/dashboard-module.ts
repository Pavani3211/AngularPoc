import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { DashboardRoutingModule } from './dashboard-routing-module';
import { Classes } from './components/classes/classes';
import { Studentslist } from './components/studentslist/studentslist';
import { Teachers } from './components/teachers/teachers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   Classes,Studentslist,Teachers
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }

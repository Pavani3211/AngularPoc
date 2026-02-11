import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Studentslist } from './components/studentslist/studentslist';
import { Classes } from './components/classes/classes';
import { Teachers } from './components/teachers/teachers';
import { Dashboard } from './components/dashboard/dashboard';

const routes: Routes = [
  { path: '', redirectTo: 'studentslist', pathMatch: 'full' },
  { path: 'studentslist', component: Studentslist },
  { path: 'classes', component: Classes },
  { path: 'teachers', component: Teachers },
  {path:'dashboard',component:Dashboard}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

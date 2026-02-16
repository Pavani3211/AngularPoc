import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Studentslist } from './components/studentslist/studentslist';
import { ClassComponent } from './components/classes/classes';
import { TeacherComponent } from './components/teachers/teachers';
import { Dashboard } from './components/dashboard/dashboard';
import { StudentslistComponent } from './components/studentslist/studentslist';
import { SubjectComponent } from './subjects/subjects';
import { Home } from './components/home/home';

const routes: Routes = [
  {
    path: '', component: Home,
    children: [
      { path: '', redirectTo: 'studentslist', pathMatch: 'full' },
      { path: 'studentslist', component: StudentslistComponent },
      { path: 'classes', component: ClassComponent },
      { path: 'teachers', component: TeacherComponent },
      { path: 'dashboard', component: Dashboard },
      { path: 'subjects', component: SubjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

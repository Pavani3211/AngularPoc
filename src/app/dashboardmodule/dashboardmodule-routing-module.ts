import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from '../features/dashboard/dashboard';
import { Classes } from './classes/classes';
import { Students } from './students/students';
import { Teachers } from './teachers/teachers';

const routes: Routes = [
  {
    path:'dashboard',component:Classes,
    children:[ {path:'Classes', component:Classes},
       {path:'Students', component:Students},
       {path:'teacher', component:Teachers},
     { path: '', redirectTo: 'home', pathMatch:'full'}

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardmoduleRoutingModule { }

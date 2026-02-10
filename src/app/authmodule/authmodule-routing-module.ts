import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from '../login/login';
import { Registration } from '../registration/registration';
import { Authcomponent } from './authcomponent/authcomponent';

const routes: Routes = [
  {
    path: 'authmodule', 
    component: Authcomponent, 
    children: [
      { path: 'login', component: Login },      
      { path: 'register', component: Registration },
      { path: '', redirectTo: 'login', pathMatch: 'full' } 
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthmoduleRoutingModule { }

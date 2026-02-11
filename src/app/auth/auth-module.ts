import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing-module';
import { FormsModule } from '@angular/forms';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Login,
    Registration
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }

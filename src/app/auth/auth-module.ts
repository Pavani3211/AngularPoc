import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing-module';
import { FormsModule } from '@angular/forms';
import { Login } from './components/login/login';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/registration/registration';

@NgModule({
  declarations: [
    Login,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }

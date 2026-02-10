import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthmoduleRoutingModule } from './authmodule-routing-module';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { RouterModule } from '@angular/router';
import { Authcomponent } from './authcomponent/authcomponent';


@NgModule({
  declarations: [
    Login,
    Registration,
    Authcomponent
  ],
  imports: [
    CommonModule,
    AuthmoduleRoutingModule,
    RouterModule.forRoot([
    {path:'',component:Login},
    {path:'authmodule/registration',component:Registration}
    ])
  ]
})
export class AuthmoduleModule { }

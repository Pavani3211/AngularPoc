import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardmoduleRoutingModule } from './dashboardmodule-routing-module';
import { Teachers } from './teachers/teachers';
import { Classes } from './classes/classes';


@NgModule({
  declarations: [
    Teachers,
    Classes
  ],
  imports: [
    CommonModule,
    DashboardmoduleRoutingModule
  ]
})
export class DashboardmoduleModule { }

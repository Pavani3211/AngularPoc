import { Routes } from '@angular/router';
// import { Login } from './auth/components/login/login';
// import { Registration } from './auth/components/registration/registration';
import { Dashboard } from './dashboard/components/dashboard/dashboard';
//import { Studentslist } from './dashboard/components/studentslist/studentslist';
// import { Classes } from './dashboard/components/classes/classes';
import { authGuard } from './guards/auth.guard';
// import { AuthmoduleModule } from './authmodule/authmodule-module';

export const routes: Routes = [
//  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path:'auth', loadChildren:()=>import('./auth/auth-module').then(m=>m.AuthModule)},
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // // { path: 'login', component: Login },
  // { path: 'registration', component: Registration },
  { path: 'dashboard',canActivate: [authGuard], loadChildren:()=>import('./dashboard/dashboard-module').then(p=>p.DashboardModule)},
  // { path: 'students', component: Studentslist },
  // { path: 'classes', component: Classes },
  { path: '**', redirectTo: 'auth' }
];

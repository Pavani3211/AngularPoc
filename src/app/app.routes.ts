import { Routes } from '@angular/router';
// Import your components (ensure paths match your folder structure)
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { Dashboard } from './features/dashboard/dashboard';
import { Studentslist } from './studentslist/studentslist';
// import { Teachers } from './teachers/teachers';
import { Classes } from './classes/classes';

export const routes: Routes = [
  // 1. Default Route: Open login first
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Auth Routes
  { path: 'login', component: Login },
  { path: 'registration', component: Registration },

  // 3. Management Routes (Accessed after Login)
  { path: 'dashboard', component: Dashboard },
  { path: 'students', component: Studentslist },
  // { path: 'teachers', component: Teachers },
  { path: 'classes', component: Classes },

  // 4. Wildcard Route: If user types a wrong URL, send to login
  { path: '**', redirectTo: 'login' }
];

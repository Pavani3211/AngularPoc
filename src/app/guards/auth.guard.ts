import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
 
    return true; 
  } else {

    console.warn('Access Denied: Redirecting to Login');
    router.navigate(['/auth/login']); 
    return false;
  }
};

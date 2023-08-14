import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutheticationService } from 'src/app/authetication/services/authetication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AutheticationService);
  const router = inject(Router);

  // Check if the user is logged in using the AuthService
  if (authService.isLoggedIn()) {
    return authService.isLoggedIn(); // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
    router.navigate(['login']);
  }
};

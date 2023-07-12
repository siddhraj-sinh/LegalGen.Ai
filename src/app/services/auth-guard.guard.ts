import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.isLoggedIn()){
    return true;
  }
   // Redirect to the login page
   alert("you are not logged in ! please login to continue..")
   return router.parseUrl('/user/signin');
};

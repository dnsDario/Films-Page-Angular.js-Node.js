import { inject } from '@angular/core';
import { AuthService } from './../services/guardServices/auth.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.getAuthToken();
};

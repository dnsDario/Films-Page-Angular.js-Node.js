import { CanActivateFn } from '@angular/router';


/* No se consigue usar adecuadamente */
export const adminGuard: CanActivateFn = (route, state) => {
  return true;
};

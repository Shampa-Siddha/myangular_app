import { CanActivateFn } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';
import { ɵɵinject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const authService =  ɵɵinject(MyserviceService);
  if(localStorage.getItem('seller')){
   return true

  }
  return authService.isloggedin;
 
};

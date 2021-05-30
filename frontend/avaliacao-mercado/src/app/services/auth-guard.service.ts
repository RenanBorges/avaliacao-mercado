import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    let isloggedIn = Boolean(localStorage.getItem('isLoggedIn')) ?? false;
    if (!isloggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

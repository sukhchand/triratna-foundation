import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      return this.loginService.user.pipe(
        take(1),
        map(user => {
          // const isAuth = !!user;
          const isAuth = !!localStorage.getItem('userData');
          if (isAuth) {
            return true;
          }
          return this.router.createUrlTree(['']);
        })
      );
  }
}

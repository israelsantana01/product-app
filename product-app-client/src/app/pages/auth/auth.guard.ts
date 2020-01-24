import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: import('@angular/router').ActivatedRouteSnapshot,
    // tslint:disable-next-line: max-line-length
    state: import('@angular/router').RouterStateSnapshot
  // tslint:disable-next-line: max-line-length
  ): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {

      if (this.authService.authenticaded) {
        return true;
      }

      this.router.navigate(['/auth']);

      return false;
  }

}

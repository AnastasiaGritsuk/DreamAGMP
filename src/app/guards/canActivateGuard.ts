import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../login-page/authorization.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private authService: AuthorizationService, public router: Router) {}

    canActivate(): Observable<boolean> {
        return this.authService.isAuthenticated.pipe(
            map((result)=> {
                if (result) {
                    return true;
                } else {
                    this.router.navigate(['login']);
                    return false;
                }
        }));
    }
} 
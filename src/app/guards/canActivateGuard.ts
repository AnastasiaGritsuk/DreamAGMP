import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../login-page/authorization.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private authService: AuthorizationService, public router: Router) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isAuthenticated) {
            this.router.navigate(['login']);
            console.log("canActivate false")
            return false;
        }
        console.log("canActivate true");
        return true;
    }
} 
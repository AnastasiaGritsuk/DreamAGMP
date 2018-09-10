import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../login-page/authorization.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private authService: AuthorizationService) {

    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated();
    }
}
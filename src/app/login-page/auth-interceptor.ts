import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthorizationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `${this.auth.getToken()}`)
        });

        return next.handle(authReq)
            .pipe(
                catchError(err => {
                    if (err instanceof HttpErrorResponse && err.status === 0) {
                        console.log('Check Your Internet Connection And Try again Later');
                    } else if (err instanceof HttpErrorResponse && err.status === 401) {
                        this.auth.setToken(null);
                    }
                    return throwError(err);
                })
            );
    }
}

import { Injectable } from '@angular/core';
import { Utils } from '../shared/utils';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    private token = null;
    private user: User;

    constructor(
        private http: HttpClient
    ) { }

    public login(username: string, password: string): Observable<string> {
        return this.http.post<string>(`${BASE_URL}`, { username, password})
            .pipe(map(token => {
                if (token) {
                    //this.user.firstName = username;
                    this.token = token;
                }
                return token;
            }));
    }

    public logout() {
       // localStorage.removeItem(this.token);
        this.token = null;
        this.user = null;
    }

    public get isAuthenticated(): boolean {
        return this.token ? true: false;
    } 


    public getUserInfo(): User {
        return this.user;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): string {
        return this.token = token;
    }
}

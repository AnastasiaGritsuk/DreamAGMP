import { Injectable } from '@angular/core';
import { Utils } from '../shared/utils';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    public token: string = '';
    public user: User;

    constructor(
        private http: HttpClient
    ) { }

    public login(username: string, password: string): Observable<User> {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bacis ' + btoa(username + ':' + password)
            })
          };
        //this.token = Utils.uniqueId();
        this.user = {
            id: this.token,
            firstName: username
        }
        return this.http.post<User>(`${BASE_URL}`, {}, httpOptions);

        //localStorage.setItem(this.token, JSON.stringify(this.user));
    }

    public logout() {
        localStorage.removeItem(this.token);
        this.token = null;
        this.user = null;
    }

    public isAuthenticated(): boolean {
        if (localStorage.getItem(this.token)) {
            return true;
        }
        return false;
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

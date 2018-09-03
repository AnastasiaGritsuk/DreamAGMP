import { Injectable } from '@angular/core';
import { Utils } from '../shared/utils';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    public token: string = '';
    public user: User;

    constructor() { }

    public login(username: string, password: string): void {
        this.token = Utils.uniqueId();
        this.user = {
            id: this.token,
            firstName: username,
            password:password
        }

        localStorage.setItem(this.token, JSON.stringify(this.user));
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
}

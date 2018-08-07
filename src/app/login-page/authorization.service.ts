import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    constructor() { }

    public login(token: string, userInfo: string): void {
        localStorage.setItem(token, JSON.parse(userInfo));
    }

    public logout(token: string) {
        localStorage.removeItem(token);
    }

    public isAuthenticated(token): boolean {
        if (localStorage.getItem(token)) {
            return true;
        }
        return false;
    } 

    public getUserInfo(token: string) {
        localStorage.getItem(token);
    }
}

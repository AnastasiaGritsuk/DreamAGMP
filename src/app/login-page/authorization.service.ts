import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    constructor() { }

    public login(token: string, userInfo: string): void {
        localStorage.setItem(token, JSON.stringify(userInfo));
    }

    public logout(token: string) {
        localStorage.removeItem(token);
    }

    public get isAuthenticated(): boolean {
        return false;
    } 

    public getUserInfo(token: string) {
        localStorage.getItem(token);
    }
}

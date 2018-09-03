import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public username: string = '';
    public password: string = '';
    @Output() userLogin = new EventEmitter<boolean>();

    constructor(private authService: AuthorizationService) { }

    ngOnInit() {
    }

    public submit() {
        // temporary soluthion
        
        if (this.username == '' || this.password == '') {
            return;
        }
        this.authService.login(this.username, this.password);
        this.userLogin.emit(true);
    }

    public isAuth(): boolean {
        return this.authService.isAuthenticated();
    }
}

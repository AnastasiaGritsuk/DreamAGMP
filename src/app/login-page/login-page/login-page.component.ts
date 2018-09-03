import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public username: string = '';
    public password: string = '';

    constructor(private authService: AuthorizationService) { }

    ngOnInit() {
    }

    public submit() {
        this.authService.login(this.username, this.password);
    }
}

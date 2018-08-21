import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    @Input () token: string;
    public username: string = "";
    public password: string = "";

    constructor(private authorizationService: AuthorizationService) { }

    ngOnInit() {
    }

    public submit() {
        console.log("onSubmit");
        this.authorizationService.login(this.token, JSON.stringify({username: this.username, password: this.password}));
    }
}

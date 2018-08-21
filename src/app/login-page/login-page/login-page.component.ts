import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

    public submit() {
        console.log("onSubmit");
    }
}

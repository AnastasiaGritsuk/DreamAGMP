import { Component, OnInit } from '@angular/core';
import { Utils } from '../../shared/utils';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    public utils = Utils;
    public token: string = "";

    constructor() { }

    ngOnInit() {
    }

    public submit() {
        console.log("onSubmit");
    }

    public getToken() {
        Utils.uniqueId();
    }
}

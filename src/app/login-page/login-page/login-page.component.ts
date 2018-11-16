import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthorizationService } from '../authorization.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public username: string = '';
    public password: string = '';

    constructor(
        private authService: AuthorizationService, 
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
    }

    public submit() {
        // temporary soluthion

        if (this.username == '' || this.password == '') {
            return;
        }
        this.authService.login(this.username, this.password).subscribe((response)=> {
            console.log("xxx");
            this.router.navigate(['/'], { relativeTo: this.route });
        });
        
    }
}

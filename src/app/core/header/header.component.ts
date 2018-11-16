import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../login-page/authorization.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private authorizationService: AuthorizationService) { }

    ngOnInit() {}

    public isAuth(): boolean {
        return this.authorizationService.isAuthenticated
    }
}

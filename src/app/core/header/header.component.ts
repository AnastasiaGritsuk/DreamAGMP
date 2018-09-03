import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../login-page/authorization.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() userLogout = new EventEmitter<boolean>();

    constructor(private authorizationService: AuthorizationService) { }

    ngOnInit() {
    }

    public logout(): void {
        this.userLogout.emit(true);
        this.authorizationService.logout();
    }

    public isAuth(): boolean {
        return this.authorizationService.isAuthenticated();
    }

}

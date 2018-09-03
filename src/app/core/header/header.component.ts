import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../login-page/authorization.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() userLogout = new EventEmitter<boolean>();

    constructor(
        private authorizationService: AuthorizationService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
    }

    public logout(): void {
        this.userLogout.emit(true);
        this.authorizationService.logout();
        this.router.navigate(['login'], { relativeTo: this.route });
    }

    public isAuth(): boolean {
        return this.authorizationService.isAuthenticated();
    }

}

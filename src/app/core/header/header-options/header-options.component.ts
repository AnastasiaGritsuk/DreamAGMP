import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user';
import { AuthorizationService } from 'src/app/components/login-page/authorization.service';

@Component({
    selector: 'app-header-options',
    templateUrl: './header-options.component.html',
    styleUrls: ['./header-options.component.scss']
})
export class HeaderOptionsComponent implements OnInit {
    public user: User;
    constructor(private authorizationService: AuthorizationService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.user = this.authorizationService.getUserInfo();
    }

    public logout(): void {
        this.authorizationService.logout();
        this.router.navigate(['login'], { relativeTo: this.route });
    }
}

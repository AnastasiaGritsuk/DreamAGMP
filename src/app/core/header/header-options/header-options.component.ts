import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/user';
import { AuthorizationService } from '../../../login-page/authorization.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header-options',
    templateUrl: './header-options.component.html',
    styleUrls: ['./header-options.component.css']
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

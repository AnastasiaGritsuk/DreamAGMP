import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorizationService } from './login-page/authorization.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})
export class AppComponent implements OnInit {

	public isUserAuthentificated: boolean = false;

    constructor(
		private router: Router,
		private route: ActivatedRoute,
		private readonly authorizationService: AuthorizationService) {}


    public ngOnInit() {
        if (this.authorizationService.isAuthenticated) {
			this.router.navigate(['./'], { relativeTo: this.route });
		} else {
			this.router.navigate(['login'], { relativeTo: this.route });
		}
    }

	public handleLogout(): void {
		this.isUserAuthentificated = false;
	}

	public handleLogin(): void {
		this.isUserAuthentificated = true;
	}
}
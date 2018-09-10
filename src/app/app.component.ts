import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';

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
        private route: ActivatedRoute) {}


    public ngOnInit() {
        if (this.isUserAuthentificated) {
			this.router.navigate(['./'], { relativeTo: this.route });
		} else {
			this.router.navigate(['login'], { relativeTo: this.route });
		}
    }

	public isAuth(): boolean {
		return this.isUserAuthentificated;
	}

	public handleLogout(): void {
		this.isUserAuthentificated = false;
	}

	public handleLogin(): void {
		this.isUserAuthentificated = true;
	}
}
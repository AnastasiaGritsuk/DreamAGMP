import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorizationService } from './login-page/authorization.service';
import { LoadingBlockService } from './loading-block/loading-block.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})
export class AppComponent implements OnInit {

	public isLoading: boolean = true;

    constructor(
		private router: Router,
		private route: ActivatedRoute,
		private readonly authorizationService: AuthorizationService,
		private readonly loadingBlockService: LoadingBlockService) {}


    public ngOnInit() {
		this.loadingBlockService.getIsLoadingObservable().subscribe((isLoading) => {
			this.isLoading = isLoading;
		});
        if (this.authorizationService.isAuthenticated) {
			this.router.navigate(['./'], { relativeTo: this.route });
		} else {
			this.router.navigate(['login'], { relativeTo: this.route });
		}
    }
}
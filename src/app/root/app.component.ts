import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingBlockService } from '../components/loading-block/loading-block.service';
import { AuthorizationService } from '../components/login-page/authorization.service';
import { FilterPipe } from '../components/shared/pipes/filter.pipe';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [FilterPipe]
})
export class AppComponent implements OnInit {
	public isLoading = false;

    constructor(
		private readonly cdRef: ChangeDetectorRef,
		private router: Router,
		private route: ActivatedRoute,
		private readonly authorizationService: AuthorizationService,
		private readonly loadingBlockService: LoadingBlockService) {}


    public ngOnInit() {
		this.loadingBlockService.getIsLoadingObservable()
			.subscribe((isLoading) => {
				this.isLoading = isLoading;
				this.cdRef.detectChanges(); // temporary, figure out why it is needed
			});
        if (this.authorizationService.isAuthenticated) {
			this.router.navigate(['./'], { relativeTo: this.route });
		} else {
			this.router.navigate(['login'], { relativeTo: this.route });
		}
    }
}

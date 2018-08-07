import { Component } from '@angular/core';
import {AuthorizationService} from './login-page/authorization.service';
import { Utils } from './shared/utils';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private authorizationService: AuthorizationService) {}

	private token: string = null;

	public isAuth(): boolean {
		if (!this.token) {
			this.token = Utils.uniqueId();
			return false;
		}
		return this.authorizationService.isAuthenticated(this.token);
	}

}

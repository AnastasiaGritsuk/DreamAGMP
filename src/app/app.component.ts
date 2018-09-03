import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { FilterPipe } from './shared/pipes/filter.pipe';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})
export class AppComponent implements OnInit {

	public isUserAuthentificated: boolean = false;

    constructor() {}
    
   

    public ngOnInit() {
        
    }

	public isAuth(): boolean {
		return this.isUserAuthentificated;
	}
}

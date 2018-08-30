import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { FilterPipe } from './shared/pipes/filter.pipe';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})
export class AppComponent implements OnInit {

    constructor() {}
    
    public isAddCoursePageOpened: boolean = false;

    public ngOnInit() {
        
    }

	public isAuth(): boolean {
		return true;
	}
	
    public onAddCourseClick(): void {
        console.log("xxx");
        this.isAddCoursePageOpened = true;
    }
}

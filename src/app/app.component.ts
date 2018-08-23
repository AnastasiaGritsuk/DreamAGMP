import { Component, OnInit } from '@angular/core';
import { CourseListItem } from './course-list/course-list-item';
import { CourseService } from './course-list/course.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private courseService: CourseService) {}
    
    private courses: CourseListItem[] = [];
	private token: string = null;

    public ngOnInit() {
        this.courses = this.courseService.getList();
    }

	public isAuth(): boolean {
		return true;
    }
}

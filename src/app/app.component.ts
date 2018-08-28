import { Component, OnInit } from '@angular/core';
import { CourseListItem } from './course-list/course-list-item';
import { CourseService } from './course-list/course.service';
import { FilterPipe } from './shared/filter.pipe';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FilterPipe]
})
export class AppComponent implements OnInit {

    constructor(
        private courseService: CourseService,
        private filterPipe: FilterPipe) {}
    
    private courses: CourseListItem[] = [];
    public coursesFiltered: CourseListItem[];
    public isAddCoursePageOpened: boolean = true;

    public ngOnInit() {
        this.courses = this.courseService.getList();
        this.coursesFiltered = this.courses;
    }

	public isAuth(): boolean {
		return true;
    }

    public search(value: string): void {
        this.coursesFiltered = this.filterPipe.transform(this.courses, value);
    }
}

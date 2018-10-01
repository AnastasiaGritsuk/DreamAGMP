import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolbarComponent } from '../../toolbar/toolbar/toolbar.component';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
    
})
export class CourseListComponent implements OnInit, AfterViewInit {
    public courses: CourseListItem[] = [];
    private maxCoursesCount: number = 5;

    @ViewChild("toolbar") toolbarComponent : ToolbarComponent;

    constructor(
        private courseService: CourseService,
        private router: Router,
        private route: ActivatedRoute) {}

    public ngOnInit() {
        this.courseService.getList(this.maxCoursesCount.toString()).subscribe((courses) => {
            this.courses = courses;
        });
    }

    public ngAfterViewInit() {
        this.toolbarComponent.serchValue().subscribe((queryString) => {
            this.search(queryString);
        });
    }

    public handleDelete(id: number): void {
        console.log(id);
    }

    public onAddCourseClick(): void {
        this.router.navigate(['./new'], { relativeTo: this.route });
    }

    public handleWasDeletedParent() {
        this.courseService.getList().subscribe((courses) => {
            this.courses = courses;
        });
    }

    public get isLoadMore(): boolean {
        return this.courses.length > this.maxCoursesCount;
    }

    private search(queryString: string): void {
        this.courseService.getFilteredList(queryString, this.maxCoursesCount.toString()).subscribe((filteredCourses) => {
            this.courses = filteredCourses;
        });
    }
}

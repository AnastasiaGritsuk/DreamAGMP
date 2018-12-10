import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CourseItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolbarComponent } from '../../toolbar/toolbar/toolbar.component';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, AfterViewInit {
    public courses: CourseItem[] = [];
    private maxCoursesCount = 5;

    @ViewChild('toolbar') toolbarComponent: ToolbarComponent;

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute) {}

    public ngOnInit() {
        // think about how to manage subscriptions
        this.courseService.getCoursesObservable().subscribe((courses) => {
            this.courses = courses;
        });
        this.courseService.getList(this.maxCoursesCount.toString());
    }

    public ngAfterViewInit() {
        this.toolbarComponent.serchValue.pipe(
            debounceTime(500)
        ).subscribe((queryString) => {
            this.search(queryString);
        });
    }

    public handleDelete(id: number): void {
        console.log(id);
    }

    public get isLoadMore(): boolean {
        return this.courses.length > this.maxCoursesCount;
    }

    private search(queryString: string): void {
        this.courseService.getFilteredList(queryString, this.maxCoursesCount.toString());
    }
}

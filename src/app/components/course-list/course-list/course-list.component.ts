import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolbarComponent } from '../../toolbar/toolbar/toolbar.component';
import { debounceTime, filter } from 'rxjs/operators';
import { Course } from 'src/app/entities/course';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../redux/reducers'
import { Observable } from 'rxjs';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, AfterViewInit {
    public courses$: Observable<Course[]>;
    private maxCoursesCount = 5;

    @ViewChild('toolbar') toolbarComponent: ToolbarComponent;

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private store: Store<fromRoot.State>) {}

    public ngOnInit() {
       
        //this.courseService.getList(this.maxCoursesCount.toString());
        this.courses$ = this.store.select(fromRoot.getAllCourses);
        console.log('changed courses ' + this.courses$);
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
        return true;
        //return this.courses$.length > this.maxCoursesCount;
    }

    private search(queryString: string): void {
        this.courseService.getFilteredList(queryString, this.maxCoursesCount.toString());
    }
}

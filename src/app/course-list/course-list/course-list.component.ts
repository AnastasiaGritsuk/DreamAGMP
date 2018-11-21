import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolbarComponent } from '../../toolbar/toolbar/toolbar.component';
import { debounceTime } from 'rxjs/operators';
import { LoadingBlockService } from 'src/app/loading-block/loading-block.service';

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
        private readonly loadingBlockService: LoadingBlockService,
        private router: Router,
        private route: ActivatedRoute) {}

    public ngOnInit() {
        // think about how to manage subscriptions
        this.courseService.getCoursesObservable().subscribe((courses)=> {
            this.courses = courses;
        })
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

    public onAddCourseClick(): void {
        this.router.navigate(['./new'], { relativeTo: this.route });
    }

    public handleWasDeletedParent() {
        // this.courseService.getList().subscribe((courses) => {
        //     this.courses = courses;
        // });
    }

    public get isLoadMore(): boolean {
        return this.courses.length > this.maxCoursesCount;
    }

    private search(queryString: string): void {
        this.courseService.getFilteredList(queryString, this.maxCoursesCount.toString());
    }
}

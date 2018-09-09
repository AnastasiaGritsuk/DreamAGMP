import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    providers: [FilterPipe]
    
})
export class CourseListComponent implements OnInit {
    private courses: CourseListItem[];
    public coursesFiltered: CourseListItem[];

    public isAddCoursePageOpened: boolean = false;

    constructor(
        private courseService: CourseService,
        private filterPipe: FilterPipe,
        private router: Router,
        private route: ActivatedRoute) {}

    public ngOnInit() {
        this.courses = this.courseService.getList();
        this.coursesFiltered = this.courses;
    }

    public search(value: string): void {
        this.coursesFiltered = this.filterPipe.transform(this.courses, value);
    }

    public handleDelete(id: number): void {
        console.log(id);
    }

    public onAddCourseClick(): void {
        this.isAddCoursePageOpened = true;
        this.router.navigate(['./new'], { relativeTo: this.route });
    }
}

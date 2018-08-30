import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    providers: [FilterPipe]
    
})
export class CourseListComponent implements OnInit {
    private courses: CourseListItem[];
    public coursesFiltered: CourseListItem[];

    constructor(
        private courseService: CourseService,
        private filterPipe: FilterPipe) {}

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
}

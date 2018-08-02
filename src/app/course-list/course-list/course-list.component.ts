import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { FilterPipe } from '../../shared/filter.pipe';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    providers: [FilterPipe]
})
export class CourseListComponent implements OnInit {
    public courseList: CourseListItem[] = [];
    public courseListFiltered: CourseListItem[] = [];
    public searchValue:string;

    constructor(
        private courseService: CourseService,
        private filterPipe: FilterPipe
    ) {}

    ngOnInit() {
        this.courseList = this.courseService.getCourseItems();
        this.courseListFiltered = this.courseList;
    }

    public handleDelete(id: number): void {
        console.log(id);
    }

    public search(): void {
        this.courseListFiltered = this.filterPipe.transform(this.courseList, this.searchValue);
    }

}

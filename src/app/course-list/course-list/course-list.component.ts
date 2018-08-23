import { Component, OnInit, Input } from '@angular/core';
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
    @Input() courses: CourseListItem[];
    public courseListFiltered: CourseListItem[] = [];
    public searchValue:string;

    constructor(
        private courseService: CourseService,
        private filterPipe: FilterPipe
    ) {}

    ngOnInit() {}

    public handleDelete(id: number): void {
        console.log(id);
    }

    public search(): void {
        this.courseListFiltered = this.filterPipe.transform(this.courses, this.searchValue);
    }

}

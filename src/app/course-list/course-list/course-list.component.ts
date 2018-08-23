import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CourseListItem } from '../course-list-item';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {
    @Input() courses: CourseListItem[];
    constructor() {}

    ngOnInit() {}

    public handleDelete(id: number): void {
        console.log(id);
    }
}

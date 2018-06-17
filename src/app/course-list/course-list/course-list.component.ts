import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    public courseList: CourseListItem[] = [
        {
            id: 1,
            title: "my first course"
        },
        {
            id: 2,
            title: "my second course"
        },
        {
            id: 3,
            title: "my third course"
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}

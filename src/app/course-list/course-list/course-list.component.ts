import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    public courseList: CourseListItem[] = [];
    constructor(
        private courseService: CourseService
    ) {}

    ngOnInit() {
        this.courseList = this.courseService.getCourseItems();
    }

}

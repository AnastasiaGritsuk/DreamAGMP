import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor() { }

    public getCourseItems(): CourseListItem[] {
        return [
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
        ]
    }
}

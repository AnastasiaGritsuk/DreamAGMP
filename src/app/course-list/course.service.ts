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
                title: "my first course",
                creationDate: "07/20/2018",
                duration: 60,
                description: "desc 1"
            },
            {
                id: 2,
                title: "my second course",
                creationDate: "11/14/2014",
                duration: 60,
                description: "desc 1"
            },
            {
                id: 3,
                title: "my third course",
                creationDate: "11/14/2019",
                duration: 60,
                description: "desc 1"
            }
        ]
    }
}

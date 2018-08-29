import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-course-page',
    templateUrl: './add-course-page.component.html',
    styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

    constructor() { }
    public title: string;
    public desc: string;
    public date: string;
    public duration: number;

    ngOnInit() {
    }

    public save(): void {

    }

    public cancel(): void {

    }

}

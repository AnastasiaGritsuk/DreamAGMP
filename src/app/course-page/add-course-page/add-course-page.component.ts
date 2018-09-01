import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-course-page',
    templateUrl: './add-course-page.component.html',
    styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute) { }

    public title: string;
    public desc: string;
    public date: string;
    public duration: number;

    ngOnInit() {
    }

    public save(): void {

    }

    public cancel(): void {
        this.router.navigate(['/'], { relativeTo: this.route })
    }

}

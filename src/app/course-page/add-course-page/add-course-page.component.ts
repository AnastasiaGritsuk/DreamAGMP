import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../course-list/course.service';
import { CourseListItem } from '../../course-list/course-list-item';

@Component({
    selector: 'app-add-course-page',
    templateUrl: './add-course-page.component.html',
    styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private courseService: CourseService) { }

    public title: string;
    public desc: string;
    public date: string;
    public duration: number;

    ngOnInit() {
        this.route.params.subscribe((params)=> {
            let item: CourseListItem = this.courseService.getItemById(params.id);
            this.title = item.title;
            this.desc = item.description;
            this.date = item.creationDate;
            this.duration = item.duration;
        });
    }

    public save(): void {

    }

    public cancel(): void {
        this.router.navigate(['/'], { relativeTo: this.route })
    }

}

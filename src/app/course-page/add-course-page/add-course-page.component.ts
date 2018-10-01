import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../course-list/course.service';
import { CourseListItem } from '../../course-list/course-list-item';
import { Utils } from '../../shared/utils';

@Component({
    selector: 'app-add-course-page',
    templateUrl: './add-course-page.component.html',
    styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
    public currentItem: CourseListItem = {id:"", title: "", description:"", creationDate: "", duration: null};
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private courseService: CourseService) { }

    private isEditMode: boolean = false;

    ngOnInit() {
        this.route.params.subscribe((params)=> {
            if (!params.id) {
                this.isEditMode = false;
                return;
            }
            this.isEditMode = true;
            this.courseService.getItemById(params.id).subscribe((course) => {
                this.currentItem = course;
            });
        });
    }

    public save(): void {
        if(this.isEditMode) {
            this.courseService.updateItem(this.currentItem).subscribe((courses)=> {
                console.dir(courses);
            });
        } else {
            this.currentItem.id = Utils.uniqueId();
            this.courseService.createCourse(this.currentItem).subscribe((courses)=> {
                console.dir(courses);
            });
        }

        this.router.navigate(['/'], { relativeTo: this.route })
    }

    public cancel(): void {
        this.router.navigate(['/'], { relativeTo: this.route });
    }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../course-list/course.service';
import { Utils } from '../../shared/utils';
import * as courseActions from '../../../redux/actions/courses';
import { Course } from 'src/app/entities/course';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../redux/reducers'

@Component({
    selector: 'app-add-course-page',
    templateUrl: './add-course-page.component.html',
    styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {
    public currentItem: Course = {id: null, title: '', description: '', creationDate: '', duration: null};
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private courseService: CourseService,
        private store: Store<fromRoot.State>) { }

    private isEditMode = false;

    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (!params.id) {
                this.isEditMode = false;
                return;
            }
            this.isEditMode = true;
            this.courseService.getCourseById(params.id).subscribe((course) => {
                this.currentItem = course;
            });
        });
    }

    public save(): void {
        if (this.isEditMode) {
            this.courseService.updateCourse(this.currentItem);
        } else {
            this.currentItem.id = +Utils.uniqueId();
            
            this.store.dispatch(new courseActions.AddOne(this.currentItem))
            //this.courseService.createCourse(this.currentItem);
        }

        this.router.navigate(['/'], { relativeTo: this.route });
    }

    public cancel(): void {
        this.router.navigate(['/'], { relativeTo: this.route });
    }

}

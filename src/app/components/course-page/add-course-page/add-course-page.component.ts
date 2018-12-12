import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../course-list/course.service';
import { CourseItem } from '../../course-list/course-list-item';
import { Utils } from '../../shared/utils';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app-state';
import * as courseActions from '../../../redux/actions/courses';

@Component({
    selector: 'app-add-course-page',
    templateUrl: './add-course-page.component.html',
    styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {
    public currentItem: CourseItem = {id: '', title: '', description: '', creationDate: '', duration: null};
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private courseService: CourseService,
        private store: Store<AppState>) { }

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
            this.currentItem.id = Utils.uniqueId();
            
            this.store.dispatch(new courseActions.AddOne(this.currentItem))
            //this.courseService.createCourse(this.currentItem);
        }

        this.router.navigate(['/'], { relativeTo: this.route });
    }

    public cancel(): void {
        this.router.navigate(['/'], { relativeTo: this.route });
    }

}

import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ClientHttpService } from "src/app/components/course-list/client-http.service";
import * as courseActions from '../actions/courses';
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private courseService: ClientHttpService
    ) {}

    @Effect()
    addCourse = this.actions$
        .pipe(
            ofType(courseActions.ADD_ONE),
            switchMap(action => 
                this.courseService
                    .createCourse(action.payload)
                    .pipe(
                        map(()=> new courseActions.SaveCourseSucceded()),
                        catchError(error => of(new courseActions.SaveCourseFailed(error)))
                    )
            )
        )
}



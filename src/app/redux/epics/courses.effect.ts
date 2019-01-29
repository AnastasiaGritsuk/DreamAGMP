import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ClientHttpService } from "src/app/components/course-list/client-http.service";
import * as courseActions from '../actions/courses';
import { switchMap, catchError, map } from "rxjs/operators";
import { of, Observable } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private courseService: ClientHttpService
    ) {}

    @Effect()
    addCourse$: Observable<Action> = this.actions$
        .pipe(
            ofType<courseActions.addOne>(courseActions.ADD_ONE),
            switchMap(action => 
                this.courseService
                    .createCourse(action.payload)
                    .pipe(
                        map(()=> new courseActions.saveCourseSucceded()),
                        catchError(error => of(new courseActions.saveCourseFailed(error)))
                    )
            )
        )
    
    @Effect()
    deleteCourse$: Observable<Action> = this.actions$
        .pipe(
            ofType<courseActions.deleteOne>(courseActions.DELETE_ONE),
            switchMap(action => 
                this.courseService
                .removeCourse(action.payload)
                .pipe(
                    map(() => new courseActions.deleteCourseSucceded(action.payload)),
                    catchError(error => of(new courseActions.deleteCourseFailed(error)))
                ))
        )
}



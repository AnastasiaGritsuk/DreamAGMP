import { Action } from '@ngrx/store';
import { Course } from 'src/app/entities/course';

export const ADD_ONE = 'ADD_ONE';
export const SAVE_COURSE_SUCCEDED = 'SAVE_COURSE_SUCCEDED';
export const SAVE_COURSE_FAILED = 'SAVE_COURSE_FAILED';

export class addOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: Course) { }
}

export class saveCourseSucceded implements Action {
    readonly type = SAVE_COURSE_SUCCEDED;
}

export class saveCourseFailed implements Action {
    readonly type = SAVE_COURSE_FAILED;
    constructor(public error) {}
}

export type Action = 
    addOne | 
    saveCourseSucceded |
    saveCourseFailed;
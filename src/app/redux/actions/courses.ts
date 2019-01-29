import { Action } from '@ngrx/store';
import { Course } from 'src/app/entities/course';

export const ADD_ONE = 'ADD_ONE';
export const SAVE_COURSE_SUCCEDED = 'SAVE_COURSE_SUCCEDED';
export const SAVE_COURSE_FAILED = 'SAVE_COURSE_FAILED';

export const DELETE_ONE = 'DELETE_ONE';
export const DELETE_COURSE_SUCCEDED = 'DELETE_COURSE_SUCCEDED';
export const DELETE_COURSE_FAILED = 'DELETE_COURSE_FAILED';


export class addOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: Course) { }
}


export class saveCourseSucceded implements Action {
    readonly type = SAVE_COURSE_SUCCEDED;
    constructor() {}
}

export class saveCourseFailed implements Action {
    readonly type = SAVE_COURSE_FAILED;
    constructor(public error) {}
}

export class deleteOne implements Action {
    readonly type = DELETE_ONE;
    constructor(public payload: number) { }
}

export class deleteCourseSucceded implements Action {
    readonly type = DELETE_COURSE_SUCCEDED;
    constructor(public payload: number) {}
}

export class deleteCourseFailed implements Action {
    readonly type = DELETE_COURSE_FAILED;
    constructor(public error) {}
}

export type Action = 
    addOne | 
    saveCourseSucceded |
    saveCourseFailed |

    deleteOne |
    deleteCourseSucceded |
    deleteCourseFailed;
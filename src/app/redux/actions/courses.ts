import { Action } from '@ngrx/store';
import { CourseItem } from 'src/app/components/course-list/course-list-item';

export const ADD_ONE = 'ADD_ONE';

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: CourseItem) { }
}
export type Action = AddOne;
import { Action } from '@ngrx/store';
import { Course } from 'src/app/entities/course';

export const ADD_ONE = 'ADD_ONE';

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: Course) { }
}
export type Action = AddOne;
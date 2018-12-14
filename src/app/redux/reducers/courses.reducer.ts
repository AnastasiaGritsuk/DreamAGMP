import { CourseItem } from "src/app/components/course-list/course-list-item";
import { Action } from "@ngrx/store";
import { AppState } from "../app-state";
import * as courseActions from '../actions/courses';

const appState = {
    ids: [],
    courses: {} // map how to create
}

export function coursesReducer(state = appState, action: courseActions.Action) {
    console.log(action.type, state);

    switch(action.type) {
        case 'ADD_ONE':
            const newCourse = action.payload;
            console.log('in add');
            return {
                ...state,
                ids: [...state.ids, newCourse.id],
                courses: { ...state.courses, newCourse }
            };
        // case 'UPDATE_COURSE':
        //     console.log('in update');
        //     return state;
        // case 'DELETE_COURSE':
        //     console.log('in delete');
        //     return state;
        // case 'FIND_COURSE_BY_ID':
        //     console.log('in find by id');
        //     return state;
        default:
            return state;
    }
}

import { CourseItem } from "src/app/components/course-list/course-list-item";
import { Action } from "@ngrx/store";
import { AppState } from "../app-state";

const appState: AppState = {
    courses: []
}

export function coursesReducer(state = appState, action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case 'ADD_ONE':
            console.log('in add');
            return state;
        case 'UPDATE_COURSE':
            console.log('in update');
            return state;
        case 'DELETE_COURSE':
            console.log('in delete');
            return state;
        case 'FIND_COURSE_BY_ID':
            console.log('in find by id');
            return state;
        default:
            return state;
    }
}

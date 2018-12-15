import * as fromCourses from './courses';
import { ActionReducerMap, ActionReducer, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
    courses: fromCourses.State
}

export const reducers: ActionReducerMap<State> = {
    courses: fromCourses.reducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getCourseState = 
    createFeatureSelector<fromCourses.State>('courses');
export const getIds = createSelector(
    getCourseState,
    fromCourses.getIds,
);
export const getCourses = createSelector(
    getCourseState,
    fromCourses.getCourses,
);
export const getSelected = createSelector(
    getCourseState,
    fromCourses.getSelected,
);
export const getSelectedCourse = createSelector(
    getSelected,
    getCourses,
    (selectedId, courses) => {
        return {
            ...courses[selectedId]
        };
    }
);
export const getAllCourses = createSelector(
    getIds,
    getCourses,
    (ids, courses) => {
        return ids.map(id => courses[id]);
    }
);
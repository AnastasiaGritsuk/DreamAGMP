import * as courseAction from '../actions/courses';
import { Course } from "src/app/entities/course";

export interface State {
  ids: number[];
  courses: { [id: number]: Course };
  selected: number;
}
export const initialState: State = {
  ids: [0, 1, 2],
  courses: {
    0: {
        'id': 0,
        "title": "my first course",
        "creationDate": "07/20/2018",
        "duration": 120,
        "description": "desc 0"
      },
    1: {
        "id": 1,
        "title": "my second course",
        "creationDate": "11/14/2014",
        "duration": 45,
        "description": "desc 1"
      },
    2: {
        "id": 2,
        "title": "my third course",
        "creationDate": "11/14/2019",
        "duration": 150,
        "description": "desc 2"
      },
    },
    selected: null,
};

export function reducer(state = initialState, action: courseAction.Action) {
    switch(action.type) {
        case 'ADD_ONE':
            const newCourse = action.payload;
            return {
                ...state,
                ids: [...state.ids, newCourse.id],
                courses: { 
                    ...state.courses, [newCourse.id] : newCourse 
                }
            };
        // case 'UPDATE_COURSE':
        //     console.log('in update');
        //     return state;

        
        case 'DELETE_COURSE_SUCCEDED':
            console.log('in delete');
            const id = action.payload;
            const index = state.ids.findIndex(e => e === id);
            const newState = state.courses;
            delete newState[id];

            let obj = {
                ...state,
                ids: [...state.ids.slice(0, index), ...state.ids.slice(state.ids.length)],
                courses: {...newState}
            };
            return obj;
        // case 'FIND_COURSE_BY_ID':
        //     console.log('in find by id');
        //     return state;
        default:
            return state;
    }
}


export const getIds = (state: State) => state.ids;
export const getCourses = (state: State) => state.courses;
export const getSelected = (state: State) => state.selected;

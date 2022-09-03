import { ShoppingListState,  courseReducer } from '../reducers/course.reducer';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    course: ShoppingListState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    course: courseReducer
};
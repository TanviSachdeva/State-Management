// import the interface
//import { CourseItem } from '../models/courseItem.model';
import { CourseAction, CourseActionType } from '../Actions/course.action';
import { CourseItem } from '../models/courseItem.model';
//create a dummy initial state
// const initialState: Array<CourseItem> = [
//   {
//     id: '1',
//     department: 'Computer Engineering',
//     name: 'C++ Programming',
//   },
// ];
export interface ShoppingListState{
    courses: CourseItem[];
}

const initialState: ShoppingListState = {
  courses: [      
            {
                    id: '1',
                    department: 'Computer Engineering',
                    name: 'C++ Programming',
                  },
        
    ]
      
};
export function courseReducer(
  state: ShoppingListState = initialState,
  action: CourseAction 
){
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return {...state, courses:[...state.courses, action.payload]};
    default:
      return state;
  }
}
import * as types from '../actions/actionTypes';

export default function todoReducer(state = [], action){
  switch(action.type){
    case types.CREATE_TODO:
      //"spread operator", "object assign"
      return [...state,
        Object.assign({}, action.todo)
      ];

      //all switch statements have default
    default:
      return state;
  }
}
import * as types from './actionTypes';

export function createTodo(todo){
  //don't have to repeat todo in object, if right matches left in es6 don't have to do it
  return { type: types.CREATE_TODO, todo: todo };
}
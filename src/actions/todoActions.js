export function createTodo(todo){
  debugger;
  //don't have to repeat todo, if right matches left in es6 don't have to do it
  return { type: 'CREATE_TODO', todo: todo };
}
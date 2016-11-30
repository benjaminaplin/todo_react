export default function todoReducer(state = [], action){
  switch(action.type){
    case 'CREATE_TODO':
    debugger;
      //"spread operator", "object assign"
      return [...state,
        Object.assign({}, action.todo)
      ];

      //all switch statements have default
    default:
      return state;
  }
}
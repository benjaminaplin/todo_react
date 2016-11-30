import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
// import TodoList from './TodoList';
// import {browserHistory} from 'react-router';

class TodosPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      todo: { title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const todo = this.state.todo;
    todo.title = event.target.value;
    this.setState({todo: todo });
  }

  onClickSave(){
    this.props.dispatch(todoActions.createTodo(this.state.todo));
  }

  todoRow(todo, index){
    return <div key={index}>{todo.title}</div>;
  }

  render() {
    debugger;
    return (
      <div>
        <h1>Todos</h1>
        {this.props.todos.map(this.todoRow)}
        <h2>Add Todos</h2>
        <input
               type="text"
               onChange={this.onTitleChange}
               value={this.state.todo.title}/>
        <input 
               type="submit"
               value="Save"
               onClick={this.onClickSave}/>
        
      </div>
    );
  }
}

TodosPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

//state here represents state in store
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    //state.todos property is from reducer
    todos: state.todos
  };
}

//mapDispatchToProps is usually passed here in connect, 
//can leave off and use .dispatch instead
export default connect(mapStateToProps)(TodosPage);
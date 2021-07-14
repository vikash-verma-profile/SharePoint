import React from "react";
import { connect } from 'react-redux';
import { addTodo } from './actions/actions';

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    const {dispatch,visibleTodos}=this.props;
    return (
      <div>
       <AddTodo onAddClick={text=>dispatch(addTodo(text))}/>
       <TodoList todos={visibleTodos} />
      </div>
    );
  }
}
function select(state){
  console.log(state.todos);
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App);

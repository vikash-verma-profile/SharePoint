import React, { ReactPropTypes } from "react";
//import PropTypes from 'prop-types';

import Todo from "./AddTodo";

export default class TodoList extends React.Component {
    render() {
        console.log(this.props.todos);
        return (
            <ul>
                {this.props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
            </ul>
        );
    }
}
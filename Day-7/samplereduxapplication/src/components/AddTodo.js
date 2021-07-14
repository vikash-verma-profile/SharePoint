import React from "react";
import PropTypes, { node } from 'prop-types';

export default class AddTodo extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref= {element=>this.callrefInput=element} />
                <button onClick={(e) => this.handleClick(e)}>Add</button>
            </div>
        );
    }
    handleClick(e) {
        const node = this.callrefInput.value;
        console.log(node);
        const text = node;
        console.log(text);
        this.props.onAddClick(text);
        this.callrefInput.value = '';
    }
}
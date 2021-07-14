import React from "react";

export default class Todo extends React.Component {
    render() {
        console.log(this.props.text);
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}
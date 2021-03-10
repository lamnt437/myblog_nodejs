import React, { Component } from 'react';

class Task extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>Detail: {this.props.description}</p>
                <p>Deadline: {this.props.deadline}</p>
            </div>
        )
    }
}

export default Task;
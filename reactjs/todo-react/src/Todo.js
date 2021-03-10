import React, { Component } from 'react';
import Task from './Task'

class TodoList extends Component {
    state = {
        todo: [
            {title: "GT", description: "Write graduation thesis", deadline: "050621"},
            {title: "JP", description: "Write graduation thesis", deadline: "040721"},
            {title: "PE", description: "Write graduation thesis", deadline: "010821"},
        ],
        doing: [],
        taskCounter: 0,
        items: [],
        displayTask: true
    }

    getItems = () => {
        // for (const [index, value] of this.state.todo) {
        //     let item = '<li>' + value + '</li>';
        //     this.setState({items: this.state.items, item});
        // }
        console.log('getItem')
    }

    addTaskHandler = () => {
        this.setState({
            todo: [this.state.todo, 'new task ' + this.state.taskCounter]
        });
        this.setState({
            taskCounter: this.state.taskCounter + 1
        })
        // console.log("Task added!")
    }

    toggleTaskDisplayHandler = () => {
        let isDisplay = this.state.displayTask;
        this.setState({displayTask: !isDisplay})
    }

    // every thing inside render will be reload when screen is being rerender, not just the part inside return
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let tasks = null;

        if (this.state.displayTask === true) {
            tasks = (
                <div>
                    {
                        this.state.todo.map(task => {
                            return <Task title={task.title} description={task.description} deadline={task.deadline} />
                        })
                    }
                </div>
            )
        }

        return (               
            <div>
                <h1>Hello, world!</h1>
                <button onClick={this.addTaskHandler}>Add task!</button>
                <button onClick={this.toggleTaskDisplayHandler}>Toggle Task display</button>
                
                {tasks}
            </div>
        )
    }
}

export default TodoList;
import React, { Component } from 'react'
import ToDoItem from './ToDoItem';
export default class TodoList extends Component {
    render() {
        return (
            <section>
                <h2> todo list</h2>
                <ToDoItem/>
            </section>
        )
    }
}

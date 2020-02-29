import React, { Component } from 'react';


export default class ToDoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <li  className="added-items text-capitalize d-flex justify-content-between my-2 flex-flow-row">
                <h6>{title}</h6>
                <div className="todo-icon">
                   <span className="mx-2 text-success" onClick={handleEdit}>
                   <i className="fa fa-pencil" aria-hidden="true"></i>
                    </span> 

                    <span className="mx-2 text-danger" onClick={handleDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    </span> 
                </div>
            </li>
        )
    }
}

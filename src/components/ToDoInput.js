import React, { Component } from 'react'

export default class ToDoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;
        
        return (
           <div className="card card-body my-3">
               <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                            <i className="fa fa-book" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" 
                        placeholder="add do to item" 
                        value={item} 
                        onChange={handleChange}/>
                    </div>

                    <button type="submit" 
                    disabled={item?false:true}
                    className={editItem ? "btn btn-block btn-success mt-3": "btn btn-block btn-primary mt-3 text-uppercase"} 
                    onSubmit={handleSubmit}>
                        {editItem ? "Edit Item" : "add item"}
                    </button>
               </form>

           </div>
        )
    }
}

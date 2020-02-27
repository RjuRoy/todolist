import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';
//how to commit things in git
 class App extends Component {
   state = {
     items:[
       {id:1, title:'wake up'},
       {id:2, title:'eat breakfast'}
      ],
      id: uuidv4(),
      item:'',
      editItem:false
   };

   handleChange = (e) =>{
     console.log('handle change');
   }

   handleSubmit = (e) => {
     console.log("handle submit");
   }

   clearList = () => {
    console.log("clear list");
  }
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  }
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  }


  render() {
    console.log(this.state);
    return (
     <div>
       <div className="container">
         <div className="row">
          <ToDoInput/>
          <TodoList/>
         </div>
       </div>
     </div>
    )
  }
}

export default App;
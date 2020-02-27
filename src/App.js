import React, { Component } from 'react'
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';
//how to commit things in git
 class App extends Component {
  render() {
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
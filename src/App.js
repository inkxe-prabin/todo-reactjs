import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddToDo from './add-todo';
import ToDoList from './todo-list';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  /**
   * Add new Todo.
   */
  onToDoAdded = (item) => {
    const todoList = this.state.items.slice();
    todoList.push(item);
    this.setState({
      items: todoList
    }, () => {
      // console.log(this.state.items);
    });
  }

  /**
   * Complete a Todo.
   */
  onToDoCompleted = (taskId) => {
    const todoList = this.state.items.slice();
    todoList.map((item) => {
      if(item.id === taskId)
        item.isCompleted = 1;
      return 1;
    });

    this.setState({
      items: todoList
    });
  }

  /**
   * Delete a Todo.
   */
  onToDoDeleted= (taskId) => {
    const todoList = this.state.items.slice();
    todoList.map((item,index) => {
      if(item.id === taskId) {
        todoList.splice(index,1);
      }
      return 1;
    });

    this.setState({
      items: todoList
    });
  }

  render() {
        return (
      <div className="container">
        <div className="titleCard height-5 text-center pt-1">
          <span>toDo list</span>
        </div>
        <AddToDo onToDoAdded={this.onToDoAdded} />
        <ToDoList toDoItems = {this.state.items}
                  onToDoCompleted = {this.onToDoCompleted}
                  onToDoDeleted = {this.onToDoDeleted}  />
      </div>
    )
  }
}

export default App;

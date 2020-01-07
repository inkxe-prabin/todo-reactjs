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

  onToDoAdded = (item) => {
    const todoList = this.state.items.slice();
    todoList.push(item);
    this.setState({
      items: todoList
    }, () => {
      // console.log(this.state.items);
    });
  }

  onToDoCompleted = (taskId) => {
    const todoList = this.state.items.slice();
    todoList.map(item => {
      if(item.id === taskId)
        item.isCompleted = 1;
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
        <ToDoList toDoItems={this.state.items} onToDoCompleted={this.onToDoCompleted} />
      </div>
    )
  }
}

export default App;

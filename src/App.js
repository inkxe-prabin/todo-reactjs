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

  render() {
        return (
      <div className="container">
        <div className="titleCard height-5 text-center pt-1">
          <span>toDo list</span>
        </div>
        <AddToDo onToDoAdded={this.onToDoAdded} />
        <ToDoList toDoItems={this.state.items} />
      </div>
    )
  }
}

export default App;

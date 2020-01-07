import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddToDo from './add-todo';
// import { render } from '@testing-library/react';

// function App() {


//   render() {
//     return (
//       <div className="container">
//         <div className="titleCard height-5 text-center pt-1">
//           <span>toDo list</span>
//         </div>
//         <AddToDo onToDoAdded={this.onToDoAdded} />
//       </div>
//     )
//   }
// }

class App extends React.Component {
  onToDoAdded = (items) => {
    console.log(items);
    
  }

  render() {
        return (
      <div className="container">
        <div className="titleCard height-5 text-center pt-1">
          <span>toDo list</span>
        </div>
        <AddToDo onToDoAdded={this.onToDoAdded} />
      </div>
    )
  }
}

export default App;

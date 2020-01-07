import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          todoItem: {
            task: '',
            timing: '',
            isCompleted: 0,
          }
        };
    }

    /**
     * On changing the ToDo title.
     */
    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    /**
     * Adding new ToDo.
     */
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: this.state.term.trim()
        });
        if(this.state.term !== '') {
            const todoList = this.state.todoItem;
            let currentDate = new Date();
            todoList.task = this.state.term;
            todoList.timing = this.getDateTimeFormat(currentDate);
            todoList.isCompleted = 0;
    
            this.setState({
              term: '',
              todoItem: {
                task: '',
                timing: '',
                isCompleted: 0
              }
            });
            this.props.onToDoAdded(todoList);
        }
    }

    /**
     * Formatting current datetime.
     * @param dateTime 
     */
    getDateTimeFormat(dateTime) {
        var date = dateTime.getDate(); //Current Date
        var month = dateTime.getMonth() + 1; //Current Month
        var year = dateTime.getFullYear(); //Current Year
        var hours = dateTime.getHours(); //Current Hours
        var min = dateTime.getMinutes(); //Current Minutes
        var sec = dateTime.getSeconds(); //Current Seconds
        return date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
    }

    /**
     * Reset the ToDo title text input value.
     */
    clearToDoTitle() {
        this.setState({
            term: '',
            todoItem: {
              task: '',
              timing: '',
              isCompleted: 0
            }
        });
    }
      
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="col-md-12 addDiv p-0">
                    <input type="text" className="col-md-10 addTxtInput" onChange={this.onChange} placeholder="Add New task..." value={this.state.term} />
                    <div className="col-md-2 addActionDiv text-center pt-2">
                        <input type="submit" className="font-weight-bold btn btn-sm btn-primary defaultBgColor" value="+" style={{width: "30%"}} />
                        <input type="button" className="ml-1 font-weight-bold btn btn-sm btn-primary defaultBgColor" value="Clear"  style={{width: "60%"}} onClick={() => this.clearToDoTitle()} />
                    </div>
                </div>
            </form>
        );
    }
}

export default AddToDo;
import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const todoList = this.state.items.slice();
        let currentDate = new Date();

        todoList.push({
            "task": this.state.term,
            "timing": this.getDateTimeFormat(currentDate)
        })
        this.setState({
          term: '',
          items: todoList
        });
        this.props.onToDoAdded(todoList);
    }

    getDateTimeFormat(dateTime) {
        var date = dateTime.getDate(); //Current Date
        var month = dateTime.getMonth() + 1; //Current Month
        var year = dateTime.getFullYear(); //Current Year
        var hours = dateTime.getHours(); //Current Hours
        var min = dateTime.getMinutes(); //Current Minutes
        var sec = dateTime.getSeconds(); //Current Seconds
        return date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
    }

    handleClick() {
        console.log(this.state.items);
    }
      
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="col-md-12 addDiv p-0">
                        <input type="text" className="col-md-10 addTxtInput" onChange={this.onChange} placeholder="Add New task..." value={this.state.term} />
                        <div className="col-md-2 addActionDiv text-center pt-2">
                            <input type="submit" className="font-weight-bold btn btn-sm btn-primary defaultBgColor" value="+" style={{width: "30%"}} />
                            <input type="button" className="ml-1 font-weight-bold btn btn-sm btn-primary defaultBgColor" value="Clear"  style={{width: "60%"}} onClick={() => this.handleClick()} />
                        </div>
                </div>
            </form>
        );
    }
}

export default AddToDo;
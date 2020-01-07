import React, { Component } from 'react';
import Moment from 'react-moment';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.toDoItems
        };
    }

    completeTask(taskId) {
        this.props.onToDoCompleted(taskId);
    }

    deleteTask(taskId) {
        this.props.onToDoDeleted(taskId);
    }

    render() {
        return (
            <div className="col-md-12 mt-3 p-0">
                {/* Ongoing Tasks */}
                <div className="displayInlineFlex">
                    <span className="defaultFontColor font-weight-bold">Task to-do</span>
                    <div className="col-md-1 counterFlag">
                        <span>{this.props.toDoItems.filter(x => x.isCompleted === 0).length}</span>
                    </div>
                </div>
                <hr />

                {this.props.toDoItems.filter(x => x.isCompleted === 0).map((item,index) => 
                    <div className="col-md-12 p-0 displayInlineFlex todoCard small" key={index}>
                        <div className="col-md-7">
                            <p>{item.task}</p>
                        </div>
                        <div className="col-md-2">
                            <p><Moment format="DD MMM YYYY h:mm a">{item.timing}</Moment></p>
                        </div>
                        <div className="col-md-3 text-right">
                            <input type="button" className="btn btn-sm btn-success" value="Complete" onClick={() => this.completeTask(item.id)} />
                            <input type="button" className="ml-1 btn btn-sm btn-info" value="Edit" />
                            <input type="button" className="ml-1 btn btn-sm btn-danger" value="Delete" onClick={() => this.deleteTask(item.id)} />
                        </div>
                    </div>
                
                )}

                {/* Completed Tasks */}
                <div className="displayInlineFlex mt-3">
                    <span className="defaultFontColor font-weight-bold">Completed task</span>
                    <div className="col-md-1 counterFlag">
                        <span>{this.props.toDoItems.filter(x => x.isCompleted === 1).length}</span>
                    </div>
                </div>
                <hr />
                {this.props.toDoItems.filter(x => x.isCompleted === 1).map((item,index) => 
                    <div className="col-md-12 p-0 displayInlineFlex todoCard small" key={index}>
                        <div className="col-md-7">
                            <p>{item.task}</p>
                        </div>
                        <div className="col-md-4">
                            <p><Moment format="DD MMM YYYY h:mm a">{item.timing}</Moment></p>
                        </div>
                        <div className="col-md-1 text-right">
                            <input type="button" className="ml-1 btn btn-sm btn-danger" value="Delete" onClick={() => this.deleteTask(item.id)} />
                        </div>
                    </div>
                
                )}
            </div>
        );
    }
}

export default ToDoList;
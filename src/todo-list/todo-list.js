import React, { Component } from 'react';
import Moment from 'react-moment';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedTaskTitle: '',
            editItemId: -1,
            items: this.props.toDoItems
        };
    }

    setItemToEdit(taskId,taskName) {
        this.setState({
            editItemId : taskId,
            editedTaskTitle: taskName
        })
    }

    /**
     * Complete Todo.
     * @param taskId - Id of the todo item
     */
    completeTask(taskId) {
        this.props.onToDoCompleted(taskId);
    }

    /**
     * Delete a Todo item.
     * @param taskId - Id of the todo item
     */
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
                            {
                                (this.state.editItemId === item.id) ? 
                                (
                                    <input type="text" className="form-control m-t-5" value={this.state.editedTaskTitle} placeholder="Task title" />
                                ) :
                                (
                                    <p>{item.task}</p>
                                )
                            }
                        </div>
                        <div className="col-md-2">
                            <p><Moment format="DD MMM YYYY h:mm a">{item.timing}</Moment></p>
                        </div>
                        <div className="col-md-3 text-right">
                            <input type="button" className="btn btn-sm btn-success" value="Complete" onClick={() => this.completeTask(item.id)} />
                            <input type="button" className="ml-1 btn btn-sm btn-info" value="Edit" onClick={() => this.setItemToEdit(item.id,item.task)} />
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
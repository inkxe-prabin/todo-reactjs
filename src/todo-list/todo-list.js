import React, { Component } from 'react';

class ToDoList extends Component {
    render() {
        return (
            <div className="col-md-12 mt-3 p-0">
                <div className="displayInlineFlex">
                    <span className="defaultFontColor font-weight-bold">Task-to-do</span>
                    <div className="ml-3 col-md-1 defaultBgColor whiteFont font-weight-bold">
                        <span>6</span>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default ToDoList;
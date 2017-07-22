import React from 'react';
import TodoList from "../components/todo-list"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../action/"

class TodoListContainer extends React.Component {
    componentWillMount(){
        this.props.loadData()
    }
    render() {
        return (
            <div>
                <TodoList handleUpdate={this.props.editData} handleRemove={this.props.removeData} items={this.props.items}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchersToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(TodoListContainer);
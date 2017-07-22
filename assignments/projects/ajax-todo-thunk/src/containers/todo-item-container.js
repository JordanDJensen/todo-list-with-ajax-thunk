import React from 'react';
import TodoItem from '../components/todo-item';

import autoBind from "react-autobind";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../action/"

class TodoItemContainer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
           
        }
        autoBind(this)
    }

    handleChange(key, event) {
        this.setState({
            ...this.state,
            [key]: event.target.value
        });
    }
    toggelEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }
    render() {
        return (
            <div>
                <TodoItem toggleEdit={this.toggleEdit} handleUpdate={this.props.editData} handleChange={this.handleChange} input={this.state} handleRemove={this.props.handleRemove} item={this.props.item}/>
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

export default connect(mapStateToProps,mapDispatchersToProps)(TodoItemContainer);
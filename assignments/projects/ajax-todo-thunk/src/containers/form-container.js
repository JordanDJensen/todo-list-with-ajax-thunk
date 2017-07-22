import React from 'react';
import Form from "../components/form";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../action/"

import autoBind from "react-autobind";

class FormContainer extends React.Component {
    constructor(){
        super();
        this.state ={
            title:"",
            price:"",
            description:""
        };
        autoBind(this);
    }

    handleChange (key,event){
        this.setState({
            [key]:event.target.value
        })
    }
    render() {
        return (
            <div>
                <Form handleUpdate={this.props.editData}  handleAdd={this.props.addData} handleChange={this.handleChange} input={this.state}/>
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

export default connect(mapStateToProps,mapDispatchersToProps)(FormContainer);

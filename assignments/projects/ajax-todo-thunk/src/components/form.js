import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                
                <h1>Your Daily To-do List</h1>
                    <input onChange={(event) => {
                        this.props.handleChange("title", event)
                    }} className="form-control" placeholder="Title" value={this.props.input.title}/>
                    <input type="number" onChange={(event) => {
                        this.props.handleChange("price", event)
                    }} className="form-control"placeholder="Price" value={this.props.input.price}/>
                    <input onChange={(event) => {
                        this.props.handleChange("description", event)
                    }} className="form-control"placeholder="Description" value={this.props.input.description}/>
                   
                    <button onClick={() => {
                        this.props.handleAdd(this.props.input);
                    }} className="btn-lg btn-primary submit">Submit</button>
                        
                </div>

        
        );
    }
}

export default Form;
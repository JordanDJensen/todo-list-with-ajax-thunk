import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <div className="list">
                <button onClick={()=>{
                    this.props.handleRemove(this.props.item._id)
                }} className="btn btn-danger pull-left">X</button>
                    <h2>Title</h2>
                    <p>{this.props.item.title}</p>
                    <input className="color" value={this.props.input.title} onChange={(event) =>{
                        this.props.handleChange("title",event)}}/>
                    <h2>Price</h2>
                    <p>{this.props.item.price}</p>
                    <input className="color" onChange={(event) =>{
                        this.props.handleChange("price",event)}} value={this.props.input.price}/>
                    <h2>Description</h2>
                    <p>{this.props.item.description}</p>
                    <input className="color" onChange={(event) =>{
                        this.props.handleChange("description",event)}} value={this.props.input.description}/>
                        <button onClick={() =>{
                          this.props.handleUpdate(this.props.item._id, this.props.input)
                      }} className="btn btn-warning">Edit</button>
                </div>

                 
            </div>
        );
    }
}

export default TodoItem;
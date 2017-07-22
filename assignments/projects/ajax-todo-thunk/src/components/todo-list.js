import React from 'react';
import TodoItemContainer from "../containers/todo-item-container"

class TodoList extends React.Component {
    genItems(){
        return this.props.items.map((item, index) =>{
            return <TodoItemContainer handleUpdate={this.props.editData} handleRemove={this.props.handleRemove} key={item.title + index} item={item}/>
        })
        
    }
    render() {
        return (
            <div>
                {this.genItems()}
            </div>
        );
    }
}

export default TodoList;
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

///containers
import FormContainer from "./containers/form-container";
import TodoListContainer from "./containers/todo-list-container";

import "./css/style.css";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 text-center">
                    <FormContainer/>
                    </div>
                     <div className="col-lg-6">
                     <h1>Get er done!</h1>
                      <TodoListContainer/>
                    </div>
                </div>
                
               
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector("#root"))
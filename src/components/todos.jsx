import React, { Component } from 'react';
import axios from 'axios';
import { server } from '../enviornments/variables';


class Todos extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get(server + "/todos")
            .then(data => {
                const todos = data.data
                this.setState({ todos })
            })
            .catch(error => {
                console.log("there was an error retrieving the todos", error);

            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default Todos;


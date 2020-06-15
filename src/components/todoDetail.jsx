import React, { Component } from 'react';
import axios from 'axios';
import { server } from '../enviornments/variables';


class TodoDetail extends Component {
    state = {
        todo: {},
        id: this.props.match.params.id
    }

    componentDidMount() {
        axios.get(server + "todos/" + this.state.id)
            .then(data => {
                const todo = data.data
                this.setState({ todo })
            })
            .catch(error => {
                console.log("there was an error retrieving the todo", error);

            })
    }
    render() {
        return (
            <p>{this.state.todo.title}</p>
        );
    }
}

export default TodoDetail;
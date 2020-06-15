import React, { Component } from 'react';
import axios from 'axios';
import { server } from '../enviornments/variables';


class UserDetail extends Component {
    state = {
        user: {},
        id: this.props.match.params.id
    }

    componentDidMount() {
        axios.get(server + "users/" + this.state.id)
            .then(data => {
                console.log('this is the user', data);
                const user = data.data
                this.setState({ user })
            })
            .catch(error => {
                console.log("there was an error retrieving the user", error);

            })
    }

    render() {
        const user = this.state.user
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col col-sm">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr  >
                            <td >{user.id}</td>
                            <td >{user.name}</td>
                            <td >{user.username}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserDetail;
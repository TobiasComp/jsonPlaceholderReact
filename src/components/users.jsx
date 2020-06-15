import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { server } from '../enviornments/variables';

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(server + "users")
            .then(data => {
                const users = data.data;
                console.log("this is the data", users);

                this.setState({ users })
            })
            .catch(error => {
                console.log("there was an error retrieving the users", error);

            })
    }


    render() {
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
                        {this.state.users.map(user => (
                            <tr key={user.id} >

                                <td ><Link to={`/users/${user.id}`}>{user.id}</Link></td>
                                <td ><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                <td ><Link to={`/users/${user.id}`}>{user.username}</Link></td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Users;



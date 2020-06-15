import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">JSON</a>

                <ul className="navbar-nav">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/users">Users </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todos">Todos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Posts</Link>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default Navbar;





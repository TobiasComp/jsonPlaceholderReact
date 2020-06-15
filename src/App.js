import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Users from './components/users';
import UserDetail from './components/userDetail';
import PageNotFound from './components/pageNotFound';
import Todos from './components/todos';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Switch>

          <Route path="/users/:id" component={UserDetail} />
          <Route path="/users" component={Users} />
          {/* <Route path="/todos/:id" component={TodoDetail} /> */}
          <Route path="/todos" component={Todos} />
          <Route path="/not-found" component={PageNotFound} />
          <Route path="/" exact component={Users} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;

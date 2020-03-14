import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import FormCreation from './FormCreation';
import Login from './FormCreation/Login';
import CreateUser from './CreateUser';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" exact={true} component={FormCreation} /> */}
          <Route path="/" component = {FormCreation} />
          <Route path="/create" component={CreateUser} />
          {/* <Route path="/edit/:id" component={Edit} /> -> get with user id -> popullate -> edit -> uupdate -> put */}

        </Switch>
      </Router>

    )
  }
}
export default App;

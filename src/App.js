import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/users/Users';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar brand="React" />
        {/* <Navbar brand="CRUD" /> */}
        <div className="container pt-3">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/users" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

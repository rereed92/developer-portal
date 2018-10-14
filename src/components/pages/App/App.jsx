import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../../utils/history';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Home from '../Home/Home';
import Apps from '../Apps/Apps';
import Users from '../Users/Users';
import Login from '../Login/Login';

import Navigation from '../../organisms/Navigation/Navigation';

import './App.scss';

const App = () => (
  <main className="app">
    <Router history={history}>
      <React.Fragment>
        {(localStorage.getItem('user') && window.location.pathname !== '/login')
          && <Navigation />
        }
        <div className="app__content">
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Route
            path="/apps"
            render={({ match: { url } }) => (
              <React.Fragment>
                <PrivateRoute exact path={`${url}`} component={Apps} />
                <PrivateRoute path={`${url}/:id/users`} component={Users} />
              </React.Fragment>
            )}
          />
        </div>
      </React.Fragment>
    </Router>
  </main>
);

export default connect(null, null)(App);

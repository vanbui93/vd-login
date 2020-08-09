import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

var joinClasses = require('classnames');


class App extends React.Component {

  render() {
    const { alertMessage } = this.props;
    return (
      <div className="App">

        {alertMessage.message &&
          <div className={joinClasses('alert', { 'alert-success': `${alertMessage.type}` })}>
            {alertMessage.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }

        <Router history={history}>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/login">Đăng nhập</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/signup">Đăng kí</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/signup" component={SignupPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  alertMessage: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    alertMessage: state.alertMessages
  }
}
export default connect(mapStateToProps, null)(App)
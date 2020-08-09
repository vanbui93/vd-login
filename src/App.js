import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavigationBar from './Nav';

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
          <NavigationBar/>
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
    alertMessage: state.alertMessages,
  }
}
export default connect(mapStateToProps, null)(App)
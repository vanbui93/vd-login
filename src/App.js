import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import alertMessages from './reducers/alertMessages';

var joinClasses = require('classnames');


class App extends React.Component {

render() {
  const { alertMessage } = this.props;
  console.log(alertMessage);
  return (
    <div className="App">
      
      {alertMessage.message &&
        <div className={joinClasses('alert',{'alert-success': `${alertMessage.type}`})}>{alertMessage.message}</div>
      }
      
      <Router history={history}>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/signup">Đăng kí</Link>
            </li>
          </ul>
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

const mapStateToProps = (state, ownProps) => {
  return {
    alertMessage: state.alertMessages
  }
}
export default connect(mapStateToProps, null)(App)
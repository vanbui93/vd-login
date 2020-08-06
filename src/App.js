import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import { history } from './helpers/history';

class App extends React.Component {

render() {
  return (
    <div className="App">
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
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignupPage}></Route>
          <Redirect from="*" to="/"/>
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;

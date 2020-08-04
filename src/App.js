import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage/index';

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

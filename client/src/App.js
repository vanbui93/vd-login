import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import NewEventPage from './containers/events/NewEventPage';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavigationBar from './Nav';
import requireAuth from './utils/requireAuth';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      // this.props.alertMessage();
    });
  }

  render() {
    const { alertMessage } = this.props; //lấy từ store reducer
    return (
      <div className="App">

        {alertMessage.message &&
          <div className={`alert ${alertMessage.type}`}>
            {alertMessage.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }

        <Router history={history}>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/signup" component={SignupPage}></Route>
            <Route exact path="/new-event" component={requireAuth(NewEventPage)}></Route>
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


export default connect(mapStateToProps)(App)
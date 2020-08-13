import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { bindActionCreators } from 'redux'
import { PropTypes } from 'prop-types';
import * as userActions from './../../actions/authActions';
import { alertActions } from '../../actions/alertActions';
import { connect } from 'react-redux';

class LoginPage extends Component {
  render() {
    const { isAuthenticated, userLoginRequest, alertError } = this.props;
    return (
      <div>
        <LoginForm isAuthenticated={isAuthenticated} userLoginRequest={userLoginRequest} alertError={alertError} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  userLoginRequest: PropTypes.func.isRequired,
  alertError: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLoginRequest: bindActionCreators(userActions.userLoginRequest, dispatch),
    alertError: bindActionCreators(alertActions.alertError, dispatch),
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
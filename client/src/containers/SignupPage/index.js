import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { bindActionCreators } from 'redux';
import { userSignUpRequest } from './../../actions/signupActions';
import { alertActions } from './../../actions/alertActions';

class SignupPage extends Component {
  render() {
    const { userSignUpRequest, alertSuccess } = this.props;
    return (
      <div className="background">
        <div className="signup">
          <SignUpForm userSignUpRequest={userSignUpRequest} alertSuccess={alertSuccess}/>
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  alertSuccess: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, Props) => {
  return {
    userSignUpRequest: bindActionCreators(userSignUpRequest, dispatch),
    alertSuccess: bindActionCreators(alertActions.alertSuccess, dispatch),
  }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(SignupPage);
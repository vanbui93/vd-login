import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userSignUpRequest } from './../actions/signupActions';
import { bindActionCreators } from 'redux';

class SignupPage extends Component {
  render() {
    const { userSignUpRequest } = this.props;
    return (
      <div className="background">
        <div className="signup">
          <SignUpForm userSignUpRequest={userSignUpRequest} />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, Props) => {
  return {
    userSignUpRequest: bindActionCreators(userSignUpRequest, dispatch),
  }
}
const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(SignupPage);
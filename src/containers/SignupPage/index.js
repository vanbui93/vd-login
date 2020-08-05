import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userSignUpRequest } from './../actions/signupActions';
import { bindActionCreators } from 'redux';

class SignupPage extends Component {
  render() {
    const { classes,userSignUpRequest } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <SignUpForm userSignUpRequest={userSignUpRequest} />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object,
  userSignUpRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, Props) => {
  return {
    userSignUpRequest: bindActionCreators(userSignUpRequest, dispatch),
  }
}
const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(SignupPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { alertMessages } from './../actions/alertActions';

export default function (ComposedComponent) {
  class requireAuth extends Component {

    componentDidMount() {
      if(!this.props.isAuthenticated) {
        const {history} = this.props;
        this.props.alertMessages({
          type: 'error',
          message: 'You need to login to access this page'
        });
        history.push('/');
      };
    };

    render() {
      return (
        <ComposedComponent {...this.props}/>
      )
    }
  }

  requireAuth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    alertMessages: PropTypes.func.isRequired,
  }

  const mapStateToProps = (state, Props) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }

  const mapDispatchToProps = (dispatch, Props) => {
    return {
      alertMessages: bindActionCreators(alertMessages, dispatch)
    }
  }

  return connect(mapStateToProps,mapDispatchToProps)(requireAuth);
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { alertActions } from './../actions/alertActions';

export default function (ComposedComponent) {
  class requireAuth extends Component {

    componentDidMount() {
      if(!this.props.isAuthenticated) {
        const {history} = this.props;
        this.props.alertError({
          type:'alert-danger',
          message: 'You need to login to access this page'
        });
        history.push('/login');
      };
    };

    componentWillUpdate(nextProps, nextState) {
      const {history} = this.props;
      if(!nextProps.isAuthenticated) {
        history.push('/');
      }
    }
    

    render() {
      return (
        <ComposedComponent {...this.props}/>
      )
    }
  }

  requireAuth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    alertError: PropTypes.func.isRequired,
  }

  const mapStateToProps = (state, Props) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }

  const actionCreators = {
    alertError: alertActions.alertError
  };

  return connect(mapStateToProps,actionCreators)(requireAuth);
}

import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class HomePage extends Component {

  //kiểm tra nếu người dùng chưa đăng nhập, điều hướng người dùng đến trang /login
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      const { history } = this.props;
      history.push('/login');
    };
  };

  render() {
    return (
      <div className="homepage">
        Đây là trang home
      </div>
    )
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, Props) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(HomePage);

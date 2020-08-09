import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { userLoginRequest } from './../../actions/loginActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        identifier: '',
        password:'',
      },
      isLoading: false,
      submitted: false,
    };
  }

  handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true, isLoading: true });
    this.props.userLoginRequest(this.state)
  }

  render() {
    const { submitted, user, isLoading } = this.state;
    return (
      <div className="background">
        <div className="login">
            <div className="card">
              <form onSubmit={this.handleSubmit}>
                <div className="card-body text-xs-center pb-xs">
                  <h6>Đăng nhập để tiếp tục</h6>
                  <div className="form-group">
                    <label htmlFor="identifier">Username</label>
                    <input
                      value={user.identifier}
                      onChange={this.handleChange}
                      type="text"
                      name="identifier"
                      className="form-control"
                    />
                    {submitted && ! user.identifier &&
                      <div className="help-block">UserName is required</div>
                    }
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      value={user.password}
                      onChange={this.handleChange}
                      type="text"
                      name="password"
                      className="form-control"
                    />
                    {submitted && ! user.password &&
                      <div className="help-block">Password is required</div>
                    }
                  </div>
                  <div className="pt-1 text-md-center">
                    <div className="btn-block">
                      <button type="submit" className="btn btn-primary" disabled={isLoading}>Đăng nhập</button>
                    </div>
                  </div>
                  <div className="pt-1 text-md-center">
                    <div className="btn-block">
                      <Link to="/signup">Đăng kí tài khoản</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes={
  userLoginRequest:PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, Props) => {
  return {
      userLoginRequest:bindActionCreators(userLoginRequest, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);

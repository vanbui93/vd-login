import * as map_lodash from 'lodash/map';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import timezones from './../Data/timezones';
import './styles.css';


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        timezone: '',
        chkbStatus: ''
      },
      submitted: false,
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.email && user.password && user.passwordConfirmation && user.chkbStatus && user.timezone) {
      this.props.userSignUpRequest(user);
    }
  }

  render() {
    const { user, submitted } = this.state;
    const options = map_lodash(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <div className="card-body">
            <h6>Đăng kí tài khoản</h6>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                value={user.username}
                onChange={this.onChange}
                type="text"
                name="username"
                className="form-control"
              />
              {submitted && ! user.username &&
                <div className="help-block">UserName is required</div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={user.email}
                onChange={this.onChange}
                type="email"
                name="email"
                className="form-control"
              />
              {submitted && ! user.email &&
                <div className="help-block">Email is required</div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={user.password}
                onChange={this.onChange}
                type="password"
                name="password"
                className="form-control"
              />
              {submitted && ! user.password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirmation">Password Confirmation</label>
              <input
                value={user.passwordConfirmation}
                onChange={this.onChange}
                type="password"
                name="passwordConfirmation"
                className="form-control"
              />
              {submitted && ! user.passwordConfirmation &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
                <select
                  className="form-control"
                  name="timezone"
                  onChange={this.onChange}
                  defaultValue={1}
                >
                  <option value="">Choose Your Timezone</option>
                  {options}
                </select>
                {submitted && ! user.timezone &&
                  <div className="help-block">Timezone is required</div>
                }
            </div>
            <div className="col-auto my-1">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input 
                  type="checkbox" 
                  className="custom-control-input" 
                  name="chkbStatus" 
                  id="chkbStatus"
                  onChange={this.onChange}
                  defaultChecked={user.chkbStatus}/>
                <label className="custom-control-label" htmlFor="chkbStatus">Tôi đã đọc và đồng ý điều khoản</label>
              </div>
              {submitted && ! user.chkbStatus &&
                  <div className="help-block">This field is required</div>
                }
            </div>
            <div className="pt-1 text-md-center">
              <div className="btn-block">
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
              <Link to="/login">Đăng nhập</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

SignUpForm.propsTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
}

export default SignUpForm
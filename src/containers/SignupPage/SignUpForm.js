import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as map_lodash from 'lodash/map';
import timezones from './../Data/timezones';


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password:'',
      passwordConfirmation:'',
      timezone:'',
      chkbStatus: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userSignUpRequest(this.state).then(
      () => {},
      ({data}) => this.setState({error:data})
    );
  }

  render() {
    const { classes } = this.props;
    const { username, email, password, passwordConfirmation, chkbStatus } = this.state;
    const options = map_lodash(timezones,(val,key) => 
      <option key={val} value={val}>{key}</option>
    );
    return (
      <div>
        <Card>
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <Typography variant="h6" className={classes.title} color="textSecondary" gutterBottom>
                  Đăng kí tài khoản
                </Typography>
                <TextField
                  value={username}
                  onChange={this.onChange}
                  label="UserName"
                  type="text"
                  name="username"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={email}
                  onChange={this.onChange}
                  label="Email"
                  type="email"
                  name="email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={password}
                  onChange={this.onChange}
                  label="Password"
                  type="password"
                  name="password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  value={passwordConfirmation}
                  onChange={this.onChange}
                  id="cpassword"
                  name="passwordConfirmation"
                  label="Password Confirmation"
                  type="password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <select 
                  className="form-control" 
                  name="timezone"
                  onChange={ this.onChange}
                  defaultValue={1}
                >
                  <option value="">Choose Your Timezone</option>
                  {options}
                </select>
                <FormControlLabel
                  control={
                  <Checkbox name="chkbStatus" defaultValue={chkbStatus} onChange={this.onChange}/>
                } label="Tôi đã đọc và đồng ý điều khoản"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Sign Up
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/login">
                    <Button>Đăng nhập</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
      </div>
    )
  }
}

SignUpForm.propsTypes = {
  classes: PropTypes.object,
  userSignUpRequest: PropTypes.func.isRequired,
}

export default withStyles(styles)(SignUpForm);
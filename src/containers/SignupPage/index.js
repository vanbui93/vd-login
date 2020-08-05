import {
  Button, Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as map_lodash from 'lodash/map';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import timezones from './../Data/timezones';
import styles from './styles';

const axios = require('axios');

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password:'',
      passwordConfirmation:'',
      timezone:'',
    }
  }

  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/users', {
      user:this.state
    });
    console.log(this.state);
  }


  render() {
    const options = map_lodash(timezones,(val,key) => 
      <option key={val} value={val}>{key}</option>
    );
    const { username, email, password, passwordConfirmation } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form onSubmit={this.onSubmit}>
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
                  control={<Checkbox value="agree" />} label="Tôi đã đọc và đồng ý điều khoản"
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
      </div>
    )
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(SignupPage);

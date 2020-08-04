import React, { Component } from 'react';
import styles from './styles';
import { 
  Card, 
  Typography, 
  CardContent, 
  TextField, 
  Button, 
  FormControlLabel, 
  Checkbox,
  NativeSelect 
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import timezones from './../Data/timezones';
import * as map_lodash from 'lodash/map';

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
    console.log(this.state);
  }


  render() {
    const options = map_lodash(timezones,(val,key) => 
      <option key={val} value={val}>{key}</option>
    );
    const { username, email, password, passwordConfirmation,timezone } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form onSubmit={this.onSubmit}>
                <div className="text-xs-center pb-xs">
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
                  <NativeSelect
                    value={timezone}
                    onChange={this.onChange}
                    name="timezone"
                    label="Timezone"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                  >
                    <option value="" disabled>Choose Your Timezone</option>
                    {options}
                  </NativeSelect>
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

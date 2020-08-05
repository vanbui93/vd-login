import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Card, Typography, CardContent, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { a } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password:'',
      errors: {},
      isLoading: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.isValid()){

    }
  }

  onChange = (e) => {
    var event = e.target;
    var name = event.name;
    var value = event.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form onSubmit={this.onSubmit}>
                <div className="text-xs-center pb-xs">
                  <Typography variant="h6" className={classes.title} color="textSecondary" gutterBottom>
                   Đăng nhập để tiếp tục
                  </Typography>
                  <TextField
                    field="identifier"
                    label="Username/Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}

                    className={classes.textField}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    field="identifier"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}

                    className={classes.textField}
                    fullWidth
                    type="password"
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    disabled={isLoading}
                  >
                    Login
                  </Button>
                  <div className="pt-1 text-md-center">
                    <a href="/signup">
                      <Button>Đăng kí tài khoản</Button>
                    </a>
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

LoginPage.propTypes={
  classes:PropTypes.object,
}

export default withStyles(styles)(LoginPage);

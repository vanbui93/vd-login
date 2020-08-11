import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions/authActions';
import { alertActions } from '../../actions/alertActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password:'',
      },
      isLoading: false,
      submitted: false,
    };
  }

  //kiểm tra nếu đã loggned rồi thì trả về trang chủ, thông báo đã có tài khoản
  componentDidMount() {
    if(this.props.isAuthenticated) {
      const {history} = this.props;
      this.props.alertError({
        type:'alert-danger',
        message: 'Bạn đã có tài khoản và đã đang nhập rồi bạn yêu dấu !'
      });
      history.push('/');
    };
  };


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
    
    const {history} = this.props;
    
    const { user } = this.state;
    if (user.username && user.password){
      this.props.userLoginRequest(this.state).then(
        (res) => {  history.push('/')},
        (err) => this.setState({isLoading: false})
      ) 
    }
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
                    <label htmlFor="username">Username</label>
                    <input
                      value={user.username}
                      onChange={this.handleChange}
                      type="text"
                      name="username"
                      className="form-control"
                    />
                    {submitted && ! user.username &&
                      <div className="help-block">UserName is required</div>
                    }
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      value={user.password}
                      onChange={this.handleChange}
                      type="password"
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
  isAuthenticated: PropTypes.bool.isRequired,
  alertError: PropTypes.func.isRequired,
}

const mapStateToProps = (state, Props) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

const mapDispatchToProps = (dispatch, Props) => {
  return {
      userLoginRequest:bindActionCreators(userActions.userLoginRequest, dispatch),
      alertError:bindActionCreators(alertActions.alertError, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

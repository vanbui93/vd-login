import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutActions } from './../actions/authActions'
import { bindActionCreators } from 'redux';

class NavigationBar extends Component {

    logout = (e) => {
        e.preventDefault();
        this.props.logoutActions();

        const { history } = this.props;
        history.push('/login');
    }

    render() {
        const { isAuthenticated } = this.props;

        //userLinks cho user đã Authenticated (đã login)
        const userLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/new-event">Add New Event</NavLink>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link" onClick={this.logout}>Logout</a>
                </li>
            </ul>
        );

        //guestLinks cho user chưa login
        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/login">Đăng nhập</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/signup">Đăng kí</NavLink>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    {isAuthenticated ? userLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logoutActions: PropTypes.func.isRequired,
}


const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch, Props) => {
    return {
        logoutActions: bindActionCreators(logoutActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar))
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;

        //userLinks cho user đã Authenticated (đã login)
        const userLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/logout">Logout</NavLink>
                </li>
            </ul>
        );

        //guestLinks cho user chưa login
        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                </li>
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
    auth: PropTypes.object.isRequired,
}


const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, null)(NavigationBar)
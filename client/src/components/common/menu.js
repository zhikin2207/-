import React from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import * as authActions from '../../actions/auth-actions';

const renderLinks = (authenticated, userName, email) => {
    if (authenticated) {
        return [
            <li key="user-name"><p className="navbar-text">Hi {userName}</p></li>,
            <li key="signout"><Link to="/signout" className="navbar-link">Sign Out</Link></li>
        ];
    } else {
        return [
            <li key="signin"><Link to="/signin" className="navbar-link">Sign In</Link></li>,
            <li key="signup"><Link to="/signup" className="navbar-link">Sign Up</Link></li>
        ];
    }
}

const Menu = (props) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><IndexLink to="/" className="navbar-link">Home</IndexLink></li>
                </ul>
                <ul className="nav navbar-nav pull-right">
                    {renderLinks(props.authenticated, props.user.userName, props.user.email)}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, authActions)(Menu);

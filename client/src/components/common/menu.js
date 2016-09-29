import React from 'react';
import {Link, IndexLink} from 'react-router';

const Menu = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><IndexLink to="/" className="navbar-link">Game</IndexLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;

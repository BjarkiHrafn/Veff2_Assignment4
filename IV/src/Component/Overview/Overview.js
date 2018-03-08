import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';
import Cart from '../Cart/Cart';



class Overview extends React.Component {

    render() {
        return (
            <div>
                <h1>Overview</h1>
                <Cart />
                <NavLink
                    to="/confirmation"
                    activeClassName="active"
                    className="confirmation-nav-link">Confirm!</NavLink>
            </div>
        )
    };
};

export default Overview;

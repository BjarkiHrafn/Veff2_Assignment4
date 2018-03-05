import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const NavigationBar = ({ logoImageUrl}) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logoImageUrl} alt="" />
            </div>
            <NavigationBarLinkWrapper>
                <NavLink
                    exact
                    to="/pizza"
                    activeClassName="active"
                    className="nav-link">Pizza</NavLink>
                <NavLink
                    to="/ffers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">About</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};

export default NavigationBar;

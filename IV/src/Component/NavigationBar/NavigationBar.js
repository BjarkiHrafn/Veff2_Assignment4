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
                    
                    to="/pizza"
                    activeClassName="active"
                    className="nav-link">Pizza</NavLink>
                <NavLink
                    to="/offers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">About</NavLink>
                <NavLink
                    to="/cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};

export default NavigationBar;

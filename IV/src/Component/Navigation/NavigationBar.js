import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {

    return(
        <div className="navbar">
            <NavLink
                exact
                to="/Pizza"
                activeClassName="active"
                className="nav-link">Pizza</NavLink>
        </div>
    );

}

export default NavigationBar;

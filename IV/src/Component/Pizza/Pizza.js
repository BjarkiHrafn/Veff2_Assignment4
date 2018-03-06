import React from 'react';
import { PropTypes} from 'prop-types';
import {Route, Redirect} from 'react-router';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const Pizza = ({pizza}) => {

    const{id, name, description, price, image} = pizza;
    return(

        <div className= "pizza-wrapper">
        <NavigationBarLinkWrapper>
            <NavLink
                to={"/pizza/" + id}
                activeClassName="active"
                className="nav-link">
                <div className = "pizza-image">
                    <img src = {image} alt = "" />
                </div>
                <div className = "pizza-name">{name}</div>
                <div className = "pizza-description">{description}</div>
                <div className = "pizza-price">{price}</div>
            </NavLink>
        </NavigationBarLinkWrapper>
        </div>
    );
};

Pizza.propTypes = {
<<<<<<< HEAD
    pizza: PropTypes.shape({ // ekki þessi
=======
    pizza: PropTypes.shape({
        id: PropTypes.number,
>>>>>>> 5b444ad21d6319babea3c7e00c78b31ae613eede
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};
export default Pizza;

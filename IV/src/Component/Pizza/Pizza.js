import React from 'react';
import { PropTypes} from 'prop-types';
import {Route, Redirect} from 'react-router';
import fetch from 'isomorphic-fetch';

const Pizza = ({pizza}) => {

    const details = () => {
        var path = 'pizza(/' + pizza.id.toString();
        return dispatch => fetch('http://localhost:3500/api/pizzas/:pizza.id');

        console.log(pizza.id);
    };

    const{name, description, price, image} = pizza;
    return(
        <div className= "pizza-wrapper" onClick = {details}>
            <div className = "pizza-image">
                <img src = {image} alt = "" />
            </div>
            <div className = "pizza-name">{name}</div>
            <div className = "pizza-description">{description}</div>
            <div className = "pizza-price">{price}</div>
        </div>
    );
};

Pizza.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};
export default Pizza;

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';
import Cookies from 'universal-cookie';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';

const CartInfo = ({ cart }) => {
    const cartItems = cart.arr;

    if(cartItems.length > 0) {
        return (
            <div>
                <h1>Info</h1>
                <Cart />
                <NavLink
                    to="/checkout"
                    activeClassName="active"
                    className="nav-link">Checkout</NavLink>
            </div>
        )
    }
    else {
        return (
            <h3>empty</h3>
        )
    }

};

CartInfo.propTypes = {
    cartInfo: PropTypes.shape({
    arr: PropTypes.array
    })
};

const mapStateToProps = ({cart}) => {
    return{ cart }
}

export default connect (mapStateToProps)(CartInfo);

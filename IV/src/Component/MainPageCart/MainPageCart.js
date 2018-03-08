import React from 'react';
import TextInput from '../TextInput/TextInput';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Overview from '../Overview/Overview';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';

const MainPageCart = ({ cart }) => {
    const cartItems = cart.arr;

    if(cartItems.length > 0) {
        return (
            <div className="main-page-cart">
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
            <div className="main-page-cart">
                <h3>empty</h3>
            </div>
        )
    }

};

MainPageCart.propTypes = {
    cartInfo: PropTypes.shape({
    arr: PropTypes.array
    })
};

const mapStateToProps = ({cart}) => {
    return{ cart }
}

export default connect (mapStateToProps)(MainPageCart);

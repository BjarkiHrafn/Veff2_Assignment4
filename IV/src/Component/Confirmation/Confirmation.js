import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { submitOrder } from '../../Actions/orderAction';

const Confirmation = ({cart, user}) => {

    var cartItems = cart.arr;
    var userInfo = user;
    console.log(cartItems);
    console.log('user', userInfo);
    const phone = '5812345';

    var orderInfo = [];
    orderInfo.push(phone);

    if(cartItems.length > 0) {
        for(var i = 0; i < cartItems.length; i++) {
            orderInfo.push(cartItems[0][i]);
        }
        console.log(orderInfo);

        //const { submitOrder } = orderInfo;
        submitOrder(orderInfo);
    }

    return (
        <div>
            <h1>Confirmation</h1>
            <p>Your pizza is going in the oven</p>
        </div>
    )
};

Confirmation.propTypes = {
    cart: PropTypes.shape({
    arr: PropTypes.array
    }),
    user: PropTypes.any
};


const mapStateToProps = ({cart, user}) => {
    return{ cart, user }
}

export default connect(mapStateToProps, {})(Confirmation);

//export default Confirmation;

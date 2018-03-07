import React from 'react';
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';


const Cart = ({cart}) =>{

        const cartItems = cart.arr;
        let cartView;
        let name = [];
        let id = []

        const cookies = new Cookies();



        if(cartItems.length > 0) {
            console.log("cartItems: ", cartItems[0][0].id);
            let total = 0;

            for(let i = 0; i < cartItems.length; i++) {
                total += cartItems[i][0].price;
                name.push(cartItems[i][0].name);
                id.push(cartItems[i][0].id);

            }
            cookies.set('pizza', cartItems, { path: '/' });

            return(
                <div className = "cartContainer">
                    <h3>Cart</h3>
                    <p>{name}</p>
                    <p>{total}</p>
                </div>
            );


        } else {
            return(
                <div className = "cartContainer">
                    <h3>Cart</h3>
                </div>
            );
        }

    //


}

Cart.propTypes = {
    cart: PropTypes.shape({
    arr: PropTypes.array
    })
};


const mapStateToProps = ({cart}) => {
    return{ cart }
}
export default connect(mapStateToProps)(Cart);

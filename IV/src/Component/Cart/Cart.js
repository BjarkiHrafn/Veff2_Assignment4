import React from 'react';
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';


const Cart = ({cart}) =>{

    const cookies = new Cookies();
    const cartItems = cart.arr;
    const cookie = new Cookies();
    var newCart = [];
    var names = [];
    let total = 0;
    if(cookies.get('cart') === undefined){
        cookie.set('cart', JSON.stringify([]));
    } else {
        newCart = cookie.get('cart');
        const addToCart = (pizza) => {

            newCart.push(pizza);
            cookie.set('cart', JSON.stringify(newCart));
        };
        if(cart.arr.length > 0 ){
            addToCart(cartItems);

        }
    }

    if(newCart.length > 0){

        for(let i = 0; i < newCart.length; i++) {
            total += newCart[i][0][0].price;
            names.push(newCart[i][0][0].name);
        }
        return(

            <div className = "cartContainer">
                <h3>Cart</h3>
                    {names}
                    <br/>
                    {total}
                <br/>
            </div>
        );
    } else {
        return(
            <div className = "cartContainer">

            </div>
        );
    };

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

import {combineReducers} from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import cart from './cartReducer';
import offer from './offersReducer';
import user from './userReducer';

export default combineReducers({
    pizza, order, cart, offer, user
});

import {combineReducers} from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import cart from './cartReducer';

export default combineReducers({
    pizza, order, cart, offer
});

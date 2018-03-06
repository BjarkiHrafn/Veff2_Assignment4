import {combineReducers} from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import offer from './offersReducer';

export default combineReducers({
    pizza, order, offer
});

import {ADD_ITEM} from '../Constants/cartConstants';

export const addItem = (pizzas) => {
    return {
        type: ADD_ITEM,
        payload: pizzas
    };
};

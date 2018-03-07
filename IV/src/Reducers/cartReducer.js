import {ADD_ITEM} from '../Constants/cartConstants';


const initialUserState = {
    arr:[]
}

const cartReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case ADD_ITEM: return Object.assign({}, state, {arr: [...state.arr, action.payload] });
        default: return state;
    }
};

export default cartReducer;

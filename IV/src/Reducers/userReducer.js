import {GET_USER_INFO} from '../Constants/userConstants';

const userReducer = (state = [], action) => {
    switch(action.type) {
        case GET_USER_INFO: return action.payload;
        default: return state;
    }
};

export default userReducer;

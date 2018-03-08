import {GET_USER_INFO} from '../Constants/userConstants';

export const getUserInfo = (user) => {
    return {
        type: GET_USER_INFO,
        payload: user
    };
};

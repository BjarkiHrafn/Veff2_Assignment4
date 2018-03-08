import fetch from 'isomorphic-fetch';

export const submitOrder = (order) => {
    return dispatch => fetch('http://localhost:3500/orders', { method: 'POST', headers: new Headers({ 'Content-Type': 'application/json' }), body: JSON.stringify(order) }).then(resp => {
        if (resp.ok) { dispatch(orderSuccessful()); }
        else { dispatch(orderFailed()); }
    });
};

import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import Cart from '../Cart/Cart';
import Delivery from '../Delivery/Delivery';
import Pickup from '../Pickup/Pickup';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Overview from '../Overview/Overview';

class Checkout extends React.Component {

    render() {
        return (
            <div className="checkout-container">
                <h1>Checkout</h1>
                <NavLink
                    exact
                    to="/checkout/delivery"
                    activeClassName="active"
                    className="deliver-or-pickup">Delivery</NavLink>
                <NavLink
                    exact
                    to="/checkout/pickup"
                    activeClassName="active"
                    className="deliver-or-pickup">Pickup</NavLink>
                <div>
                    <Switch>
                        <Route exact path="/checkout/delivery" component={Delivery} />
                        <Route exact path="/checkout/pickup" component={Pickup} />
                        <Route exact path="/checkout/overview" component={Overview}/>
                    </Switch>
                </div>
            </div>
        )
    };
};


export default Checkout;

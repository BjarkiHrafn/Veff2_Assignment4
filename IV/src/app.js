import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Pizza from './Component/Pizza/Pizza';
import PizzaDetails from './Component/Pizza/PizzaDetails.js';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import{Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers/reducers';
import Menu from './Component/Menu/Menu';
import About from './Component/About/About';
import Offers from './Component/Offers/Offers';
import Offer from './Component/Offer/Offer';
import Delivery from './Component/Delivery/Delivery';
import Pickup from './Component/Pickup/Pickup';
import Confirmation from './Component/Confirmation/Confirmation';
import Cart from './Component/Cart/Cart';
import CartInfo from './Component/CartInfo/CartInfo';
import '../styles/site.less';
import Checkout from './Component/Checkout/Checkout';
import MainPageCart from './Component/MainPageCart/MainPageCart';

//import '../site.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar logoImageUrl="http://2.bp.blogspot.com/-6RJZ2t7J2RA/UZwZEyjgDVI/AAAAAAAAGBs/jBc6F3BGVH0/s1600/Cartoon%2BPizza%2BWallpaper-730880.jpg"/>
                <MainPageCart />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/pizza/:pizzaId" component={PizzaDetails} />
                        <Route exact path="/pizza" component={Menu} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Offers" component={Offers} />
                        <Route exact path="/Cart" component={CartInfo} />
                        <Route exact path="/Checkout" component={Checkout} />
                        <Route exact parth="/confirmation" component={Confirmation} />
                    </Switch>
                </div>

            </div>
        );
    }
}

ReactDOM.render(<Provider store = {createStore(Reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app'));

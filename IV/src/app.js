import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Pizza from './Component/Pizza/Pizza';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import{Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers/reducers';
import Menu from './Component/Menu/Menu';
import About from './Component/About/About';
import Offers from './Component/Offers/Offers';
import '../styles/site.less';
//import '../site.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar logoImageUrl="http://2.bp.blogspot.com/-6RJZ2t7J2RA/UZwZEyjgDVI/AAAAAAAAGBs/jBc6F3BGVH0/s1600/Cartoon%2BPizza%2BWallpaper-730880.jpg"/>
                <div className="container">
                <Menu/>
                    <Switch>
                        <Route path="/Pizza" component={Pizza} />
                        <Route path="/About" component={About} />
                        <Route path="/Offers" component={Offers} />
                    </Switch>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Provider store = {createStore(Reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app'));

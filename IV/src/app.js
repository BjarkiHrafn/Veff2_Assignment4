import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Pizza from './Component/Pizza/Pizza';
import NavigationBar from './Component/Navigation/NavigationBar';
import{Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers/reducers';
import Menu from './Component/Menu/Menu';
//import '../site.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Menu />
                <Switch>
                    <Route path="/Pizza" component={Pizza} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<Provider store = {createStore(Reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app'));

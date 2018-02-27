import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Pizza from './Pizza/Pizza';
import NavigationBar from './Navigation/NavigationBar';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Switch>
                    <Route path="/Pizza" component={Pizza} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));

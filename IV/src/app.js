import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Pizza from './Pizza/Pizza';
import About from './About/About';
import Offers from './Offers/Offers';
import NavigationBar from './NavigationBar/NavigationBar';
import '../styles/site.less';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar logoImageUrl="http://2.bp.blogspot.com/-6RJZ2t7J2RA/UZwZEyjgDVI/AAAAAAAAGBs/jBc6F3BGVH0/s1600/Cartoon%2BPizza%2BWallpaper-730880.jpg"/>
                <div className="container">
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

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));

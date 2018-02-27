import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import Pizza from './Pizza/Pizza'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            hello mafakka
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

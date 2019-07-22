import React, { Component } from 'react';
import  ReactRouter from './src/routes/ReactRouter'

export default class App extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        return (
          <ReactRouter/>
        );
    }
}

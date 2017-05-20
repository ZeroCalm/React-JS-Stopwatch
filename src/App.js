import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Timer App built in React js</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;

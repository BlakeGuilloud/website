import React, { Component } from 'react';
import './App.css';
import logo from './av1-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="img__wrapper" />
        <img src={logo} alt="i have failed you" />
      </div>
    );
  }
}

export default App;

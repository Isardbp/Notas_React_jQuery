import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Cards'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm">
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

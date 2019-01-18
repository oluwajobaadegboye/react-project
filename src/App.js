import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './components/notes'
import Toolbar from './components/toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <Notes />
      </div>
    );
  }
}

export default App;

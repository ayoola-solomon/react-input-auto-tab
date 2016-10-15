import React, { Component } from 'react';
import Autotab from './components/Autotab';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleChange = (value) => {
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form className="App-form">
          <Autotab
            type="password"
            name="DD"
            label="Date"
            maxLength={8}
            style={{ height: 30, paddingLeft: 10 }}
            hint="Enter your day of birth"
            onChange={this.handleChange}
            autoFocus
          />
          <Autotab
            type="text"
            name="MM"
            label="Month"
            maxLength={4}
            style={{ height: 30, paddingLeft: 10 }}
            hint="Enter your month of birth"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default App;

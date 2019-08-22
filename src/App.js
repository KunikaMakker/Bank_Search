import React, { Component } from 'react';
import './App.css';
import { Segment } from 'semantic-ui-react';
import BankInfoWrapper from './Components/BankInfoWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment tertiary>Bank Branches</Segment>
        <BankInfoWrapper/>
      </div>
    );
  }
}

export default App;

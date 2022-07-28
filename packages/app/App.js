import React, { Component } from 'react';
import logo from './logo.svg';
import SomeComponent from 'some-component';
import * as hooks from '@pkg/hooks';
import {Alert,Affix,Badge} from '@pkg/components'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>packages/app/App.js</code> and save to reload.
        </p>
        <SomeComponent />
        {
          Object.keys(hooks).join('<>')
        }
        <div>
        <Badge count={100} title="badge" />
        <Alert message="tessssssst" description="dessccc" />
        <Affix offsetTop={10}>
          <Alert message="fix" description="ne" />
        </Affix>
        </div>
      </div>
    );
  }
}

export default App;

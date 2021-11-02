import React, { Component } from 'react';
import logo from '../logo.svg'
import tauriCircles from '../tauri.svg'
import tauriWord from '../wordmark.svg'
import {emit} from '@tauri-apps/api/event'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="inline-logo">
              <img src={tauriCircles} className="App-logo rotate" alt="logo"/>
              <img src={tauriWord} className="App-logo smaller" alt="logo"/>
            </div>
            <a
                className="App-link"
                href="https://tauri.studio"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn Tauri
            </a>
            <img src={logo} className="App-logo rotate" alt="logo"/>
            <button type="button" onClick={() => {
              emit('click', 'Tauri is awesome')
              console.log('button clicked!')
            }
            }>shoot events!
            </button>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
    );
  }
}

export default App

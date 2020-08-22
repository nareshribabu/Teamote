import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class = "grid-container">

      <div class = "splash-body-container">
        <div class = "splash-body">
          <h3>Welcome to</h3>
          <h1>Teamote</h1>
          <br/>
          <div class = "class-code-input">
            <input type = "password" id = "inputPassword" class = "password" placeholder = "Classroom Password"></input>
          </div>
          <button class = "button">Join</button>
        </div>
      </div>

      <div class = "footer">
        <p>Made by HT6 Hackers.<br/>Copyright © 2020. All rights reserved.</p>
      </div>

    </div>
  );
}

export default App;

/*
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
*/
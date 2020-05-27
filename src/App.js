import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';


function App() {

  
  return (
    <div className="App">
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField id="outlined-basic" label="Segurado" placeholder="Nome e sobrenome do segurado" variant="outlined" />
      </header>
    </div>
  );
}

export default App;

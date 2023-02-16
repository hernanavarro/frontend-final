import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import logo from './logo.svg';

import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);
  //const [contador, setContador] = useState(0);
  const add = async () => {
    const res = await fetch('http://localhost:5050/add/2')
    const obj = await res.json();
    setContador(obj['value']);
  }

  const subtract = async () => {
    const res = await fetch('http://localhost:5050/subtract/3')
    const obj = await res.json();
    setContador(obj['value']);
  }

  const reset = async () => {
    console.log("reiniciar");
    const res = await fetch('http://localhost:5050/reset')
    const obj = await res.json();
    setContador(obj['value']);
  }

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to the final project of the subject "Software Engineering 3".
      </p>
      <div>
        <div className="botons">
          <TextField 
          id="outlined-basic"
          label="Value"
          variant="outlined"
          color="primary"
          />
        </div>
        <div>
          <div>
            <Button variant="contained" onClick={add}>Add</Button>
          </div>
          <div>
            <Button variant="contained" onClick={subtract}>Subtract</Button>
          </div>
          <div>
            <Button variant="contained" onClick={reset}>Restart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

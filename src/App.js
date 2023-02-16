import * as React from 'react';
import Button from '@mui/material/Button';
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the final project of the subject "Software Engineering 3".
        </p>
        <div>
          <Button variant="contained"  onClick = {add}>Sumar</Button>
          <Button variant="outlined" onClick = {subtract}>Restar</Button>
        </div>      
      </header>
    </div>
  );
}

export default App;

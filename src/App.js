import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import logo from './logo.svg';

import { useEffect, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.REACT_APP_BACK_URL + '/value');
      const obj = await res.json();
      setContador(obj['value']);
    })();
  }, []);

  const add = async () => {
    const res = await fetch(process.env.REACT_APP_BACK_URL + '/add/2');
    const obj = await res.json();
    setContador(obj['value']);
  };

  const subtract = async () => {
    const res = await fetch(process.env.REACT_APP_BACK_URL + '/subtract/3');
    const obj = await res.json();
    setContador(obj['value']);
  };

  const reset = async () => {
    const res = await fetch(process.env.REACT_APP_BACK_URL + '/reset');
    var obj = await res.json();
    setContador(obj['value']);
  };

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>
        Welcome to the final project of the subject "Software Engineering 3".
      </h3>
      <p> Contador: {contador} </p>
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
            <Button id="btn" data-testid="btnAdd" variant="contained" onClick={add}>Add</Button>
          </div>
          <div>
            <Button id="btn" data-testid="btnSubtract" variant="contained" onClick={subtract}>Subtract</Button>
          </div>
          <div>
            <Button id="btn" data-testid="btnReset" variant="contained" onClick={reset}>Restart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

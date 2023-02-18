import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:5050/value');
      const obj = await res.json();
      setContador(obj["value"]);
    })();
  }, []);

  const add = async () => {
    const res = await fetch('http://localhost:5050/add/2');
    const obj = await res.json();
    setContador(obj['value']);
  };

  const subtract = async () => {
    const res = await fetch('http://localhost:5050/subtract/3');
    const obj = await res.json();
    setContador(obj['value']);
  };

  const reset = async () => {
    const res = await fetch('http://localhost:5050/reset');
    var obj = await res.json();
    setContador(obj['value']);
  };

  return (
    <div className="App-header">
      <h3>
        Welcome to the final project of the subject "Software Engineering 3".
      </h3>
      <p> Counter: {contador} </p>
      <div>
        <div className="botons">
          <TextField
            id="filled-basic"
            label="Value"
            variant="filled"
            defaultValue="0"
            value={value}
            onChange={() => {
              setValue(value);
            }}
          />
        </div>
        <div>
          <div className="linea">
            <Button id="btn" data-testid="btnAdd" variant="contained" onClick={add} className="linea">Add</Button>
          </div>
          <div className="linea">
            <Button id="btn" data-testid="btnSubtract" variant="contained" onClick={subtract} className="linea">Subtract</Button>
          </div>
          <div className="linea">
            <Button id="btn" data-testid="btnReset" variant="contained" onClick={reset} className="linea">Restart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

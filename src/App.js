import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const [value, setValue] = useState();

  const sarasa = async () => {
    const res = await fetch( `${process.env.REACT_APP_BACK_URL}/value` );
      const obj = await res.json();
      console.log(obj);
      setContador(obj["value"]);
  };

  useEffect(() => {
    sarasa();
  }, []);

  const add = async () => {
    const res = await fetch( `${process.env.REACT_APP_BACK_URL}/add/${value}` );
    const obj = await res.json();
    setContador(obj['value']);
  };

  const subtract = async () => {
    const res = await fetch( `${process.env.REACT_APP_BACK_URL}/subtract/${value}`);
    const obj = await res.json();
    setContador(obj['value']);
  };

  const reset = async () => {
    const res = await fetch( `${process.env.REACT_APP_BACK_URL}/reset` );
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <div className="linea">
            <Button id="btn-add" data-testid="btnAdd" variant="contained" onClick={add} className="linea">Add</Button>
          </div>
          <div className="linea">
            <Button id="btn-subtract" data-testid="btnSubtract" variant="contained" onClick={subtract} className="linea">Subtract</Button>
          </div>
          <div className="linea">
            <Button id="btn-restart" data-testid="btnReset" variant="contained" onClick={reset} className="linea">Restart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

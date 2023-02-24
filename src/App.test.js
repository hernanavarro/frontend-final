import { render, screen } from '@testing-library/react';
import App from './App';


describe('App render', () => {
  test('Render Botons', () => {
    render(<App />);

    // btn Add
    const buttonAdd = screen.getByTestId("btnAdd");
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.id).toMatch("btn-add");
    expect(buttonAdd.textContent).toMatch("Sumar");

    // btn Subtract
    const buttonSubtract = screen.getByTestId("btnSubtract");
    expect(buttonSubtract).toBeInTheDocument();
    expect(buttonSubtract.id).toMatch("btn-subtract");
    expect(buttonSubtract.textContent).toMatch("Subtract");

    // btn Restart
    const buttonReset = screen.getByTestId("btnReset");
    expect(buttonReset).toBeInTheDocument();
    expect(buttonReset.id).toMatch("btn-restart");
    expect(buttonReset.textContent).toMatch("Reiniciar");
  });
});

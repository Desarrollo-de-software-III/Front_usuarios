/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from './App';

test('Se renderiza la pantalla de bienvenida', () => {
  render(<App />);
  expect(screen.getByText('Welcome to questions and answers')).toBeInTheDocument();
});

test("El botón de registro es visible", () => {
  render(<App />); 
  expect(screen.getByText("Sign up")).toBeVisible();
});

test("El botón de registro es funcional", () => {
  render(<App />); 
  fireEvent.click(screen.getByText("Sign up"));
  expect(screen.getAllByRole("textbox").length).toBeGreaterThan(2);
});
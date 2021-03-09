/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

test('Header test:', () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );
  const seuranta = screen.getByText(/Seuranta/i);
  expect(seuranta).toBeInTheDocument();
  const app = screen.getByText(/app/i);
  expect(app).toBeInTheDocument();
});
test('Navigation test:', () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );
  const info = screen.getByText(/Info/i);
  expect(info).toBeInTheDocument();
  const havainnot = screen.getByText(/Havainnot/i);
  expect(havainnot).toBeInTheDocument();
});

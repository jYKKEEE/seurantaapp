/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('Header test:', () => {
  render(<Navigation />);
  const seuranta = screen.getByText(/Seuranta/i);
  expect(seuranta).toBeInTheDocument();
  const app = screen.getByText(/app/i);
  expect(app).toBeInTheDocument();
});
test('Navigation test:', () => {
  render(<Navigation />);
  const info = screen.getByText(/Info/i);
  expect(info).toBeInTheDocument();
  const tapahtumat = screen.getByText(/Tapahtumat/i);
  expect(tapahtumat).toBeInTheDocument();
});

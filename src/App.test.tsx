import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
  test('renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/bren murrell/i);
    expect(linkElement).toBeInTheDocument();
  });
});

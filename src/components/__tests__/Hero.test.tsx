import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('App.tsx', () => {
  test('renders title', () => {
    render(<Hero />);
    const linkElement = screen.getByText(/bren murrell/i);
    expect(linkElement).toBeInTheDocument();
  });
});
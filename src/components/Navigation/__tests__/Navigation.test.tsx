import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

import TestWrapper from '../../TestWrapper';

describe('COMPONENT - Navigation', () => {
    it.skip('renders with active class on home page', () => {
        render(<TestWrapper initialEntries={['/']}><Navigation /></TestWrapper>);
        expect(screen.getAllByRole('link')).toHaveLength(3);
        const aboutLink = screen.getByRole('link', { name: /home/i });
        expect(aboutLink.classList).toContain('active');
    });
    it.skip('renders with active class on current page', () => {
        render(<TestWrapper initialEntries={['/about']}><Navigation /></TestWrapper>);
        expect(screen.getAllByRole('link')).toHaveLength(3);
        const aboutLink = screen.getByRole('link', { name: /about/i });
        expect(aboutLink.classList).toContain('active');
    });
});
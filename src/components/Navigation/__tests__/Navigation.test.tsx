import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

import TestWrapper from '../../TestWrapper';

describe('COMPONENT - Navigation', () => {
    it('renders with active class on current page', () => {
        render(<TestWrapper initialEntries={['/about']}><Navigation /></TestWrapper>);
        expect(screen.getAllByRole('link')).toHaveLength(2);
        const aboutLink = screen.getByRole('link', { name: /about/i });
        expect(aboutLink.classList).toContain('active');
    });
    it('does not render hidden pages (projects)', () => {
        render(<TestWrapper initialEntries={['/projects']}><Navigation /></TestWrapper>);
        const aboutLink = screen.queryByRole('link', { name: /projects/i });
        expect(aboutLink).toBeNull();
    });
});
import Page from "../Page";
import TestWrapper from '../../TestWrapper';
import { render, screen } from "@testing-library/react";

jest.mock('../../Section/Section', () => ({ title }: Section) => <div data-testid="section">{title}</div>);

describe('COMPONENT: Page', () => {
    it('renders a page', () => {
        render(<TestWrapper initialEntries={['/about']}><Page /></TestWrapper>);
        expect(screen.getByRole('heading', { level: 1}).textContent).toEqual('About');
        const sections = screen.getAllByTestId('section');
        expect(sections).toHaveLength(2);
        expect(sections[0].textContent).toContain('What do I care most about?')
    });
})
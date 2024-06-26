import Page from "../Page";
import TestWrapper from '../../TestWrapper';
import { render, screen } from "@testing-library/react";

jest.mock('../../Section/Section', () => () => <div data-testid="section">Section</div>);

describe('COMPONENT: Page', () => {
    it('renders a page', () => {
        render(<TestWrapper><Page searchString="About" /></TestWrapper>);
        expect(screen.getByRole('heading', { level: 1}).textContent).toEqual('About');
    });
})
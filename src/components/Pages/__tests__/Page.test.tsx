// import Page from "../Page";
// import TestWrapper from '../../TestWrapper';
// import { render, screen } from "@testing-library/react";

jest.mock('../../Section/Section', () => () => <div data-testid="section">Section</div>);

describe.skip('COMPONENT: Page', () => {
    it.todo('reinstate this test');
    // it.skip('renders a page', () => {
    //     render(<TestWrapper><Page /></TestWrapper>);
    //     expect(screen.getByRole('heading', { level: 1}).textContent).toEqual('About');
    // });
})
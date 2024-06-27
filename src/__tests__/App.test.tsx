import { render, screen } from "@testing-library/react";
import App from "../App";
import TestWrapper from "../components/TestWrapper";

const MOCK_NAV_CONTENT = 'Mocked nav'

jest.mock('../components/Navigation/Navigation', () => () => <h4>{MOCK_NAV_CONTENT}</h4>);


describe('COMPONENTS: App', () => {
    it('renders without errors', () => {
        render(<TestWrapper><App /></TestWrapper>);
        const mockNav = screen.getByRole('heading', { level: 4 });
        expect(mockNav.textContent).toBe(MOCK_NAV_CONTENT);
    });
});

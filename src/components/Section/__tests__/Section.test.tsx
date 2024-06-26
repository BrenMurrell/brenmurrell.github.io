import Section from "../Section";
import TestWrapper from '../../TestWrapper';
import { render, screen } from "@testing-library/react";

jest.mock('../../Card/Card', () => () => <div data-testid="card">Card</div>)

describe('COMPONENT: Section', () => {
    it('renders with title if given empty props', () => {
        render(<TestWrapper><Section title="Test title" /></TestWrapper>);
        expect(screen.getByRole('heading', { level: 2}).textContent).toEqual('Test title');
    })

    it.todo('renders with cards');

})
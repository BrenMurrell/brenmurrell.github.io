import Section from "../Section";
import TestWrapper from '../../TestWrapper';
import { render, screen } from "@testing-library/react";
import { Card } from "../../../../content";

jest.mock('../../Card/Card', () => () => <div data-testid="card">Card</div>)

// TODO: move to msw once firebase implemented
const cards: Card[] = [
    {
        title: 'Card 1',
        content: 'Card 1 content'
    },
    {
        title: 'Card 2',
        content: 'Card 2 content'
    }
];


describe('COMPONENT: Section', () => {
    it('renders with title if given empty props', () => {
        render(<TestWrapper><Section title="Test title" /></TestWrapper>);
        expect(screen.getByRole('heading', { level: 2}).textContent).toEqual('Test title');
    })

    it('renders with cards', () => {
        render(<Section title="Test title" cards={cards}/>);
        expect(screen.getAllByTestId('card').length).toEqual(2);
    });
})
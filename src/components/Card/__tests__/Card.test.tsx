import { render, screen } from "@testing-library/react";
import Card from "../Card";


const defaultProps = {
    title: 'Card title',
    content: '<p>Child 1</p><button>Click me.</button><p>Child 2</p>',
}

describe('Card', () => {
    it('renders', () => {
        const container = render(<Card {...defaultProps} />);
        expect(container).toMatchSnapshot();
    });

    it('renders expected content', () => {
        render(<Card {...defaultProps} />);
        expect(screen.queryByRole('heading')?.textContent).toEqual(defaultProps.title);
        expect(screen.getByRole('button').textContent).toEqual('Click me.');
    })
})
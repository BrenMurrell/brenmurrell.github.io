import { render } from "@testing-library/react";
import Card, { CardProps } from "../Card";

const defaultProps: CardProps = {
    title: 'Card title',
    children: [<p>Child 1</p>,<p>Child 2</p>] 
}

describe('Card', () => {
    it('renders', () => {
        const container = render(<Card {...defaultProps} />);
        expect(container).toMatchSnapshot();
    })
})
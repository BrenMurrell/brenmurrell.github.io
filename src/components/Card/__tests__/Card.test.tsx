import { render } from "@testing-library/react";
import Card from "../Card";


const defaultProps = {
    title: 'Card title',
    content: '<p>Child 1</p>,<p>Child 2</p>',
}

describe('Card', () => {
    it('renders', () => {
        const container = render(<Card {...defaultProps} />);
        expect(container).toMatchSnapshot();
    })
})
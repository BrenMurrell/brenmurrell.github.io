import { render } from "@testing-library/react";
import About from "../About";

describe('About', () => {
    it('renders' ,() => {
        const container = render(<About />);
        expect(container).toMatchSnapshot();
    })
});
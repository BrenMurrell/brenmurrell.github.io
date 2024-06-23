import { render } from "@testing-library/react";
import Projects from "../Projects";

describe('Projects', () => {
    it('renders' ,() => {
        const container = render(<Projects />);
        expect(container).toMatchSnapshot();
    })
});
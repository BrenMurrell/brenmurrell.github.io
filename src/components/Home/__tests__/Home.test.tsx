import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe('Home', () => {
    // it.todo('fix tests');
    it('renders' ,() => {
        const container = render(<Home />);
        expect(container).toMatchSnapshot();
    })

    it('has correct content', () => {
        render(<Home />);
        const heading_one = screen.getByRole('heading', { level: 1});
        expect(heading_one.textContent).toEqual("Bren Murrell");

        const subheadings = screen.queryAllByRole('heading', { level: 2});
        expect(subheadings).toHaveLength(4);
        expect(subheadings[0].textContent).toEqual('Senior Front End Developer');
    })
});
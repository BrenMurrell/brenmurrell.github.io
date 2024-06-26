import { MemoryRouter } from "react-router-dom";
import { AppContext } from "../AppContext";
import { ReactNode } from "react";
import content from '../content.json';

type WrapperProps = {
    children: ReactNode,
    initialEntries?: string[]
}

const TestWrapper = ({children, initialEntries}: WrapperProps) => (
    <AppContext.Provider value={content}>
        <MemoryRouter initialEntries={initialEntries}>
            {children}
        </MemoryRouter>
    </AppContext.Provider>
)

export default TestWrapper;
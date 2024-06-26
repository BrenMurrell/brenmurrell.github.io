// import useContent from '../useContent';
// import { Content } from "../../../content";
import { createContext } from 'react'; // Add this line to import React

// const defaultContent: Content = {
//     pages: [{
//         title: 'Page 1'
//     }]
// }

jest.mock("../../AppContext", () => ({
    __esModule: true,
    default: createContext
}));


describe('useContent', () => {
    test.todo('should return the content from AppContext');
});
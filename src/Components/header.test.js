import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
describe('>>>HEADER', () => {
    let wrapper
    const output = 10
    beforeEach(()=> {
        wrapper = shallow(<Header />);
    })
    it('H1 renders correctly', () => {
        expect(wrapper.find('h1').text()).toEqual('Bren Murrell');
    });
    it('H2 renders correctly', () => {
        expect(wrapper.find('h3').text()).toEqual('Full Stack Developer');
    });
});
import React from 'react';
import Card from './card';
import { shallow } from 'enzyme';
describe('>>>CARD tests', () => {
    let wrapper
    beforeEach(()=> {
        wrapper = shallow(<Card title="test" subtitle="subtitle text" footer="footer meta test" copy="<p>Test copy</p>" />);
    })
    it('H1 renders correctly', () => {
        expect(wrapper.find('.card__title').text()).toEqual('test');
    });
    it('H3 renders correctly', () => {
        expect(wrapper.find('.card__subtitle').text()).toEqual('subtitle text');
    });
    it('Card body renders correctly', () => {
        expect(wrapper.html()).toContain('<p>Test copy</p>');
    });
    it('Card footer meta renders correctly', () => {
        expect(wrapper.find('.card__meta').text()).toEqual('footer meta test');
    });
});


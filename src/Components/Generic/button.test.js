import React from 'react';
import Button from './button';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import { firestore } from 'firebase';

describe('>>>Button tests', () => {
    let wrapper, link
    beforeEach(()=> {
        wrapper = mount(<MemoryRouter><Button title="test" link="/case-studies" /></MemoryRouter>);
    });
    it('renders a link correctly', () => {
        link = wrapper.find('Link').find({ to: '/case-studies' });
        expect(link.html()).toBe('<a class="c-btn__link" href="/case-studies">test</a>');
    });
});


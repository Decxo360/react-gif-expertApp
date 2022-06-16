import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Trabajando en GifExpertApp', () => { 

    test('Debe de mostrar la snapshot', () => {

        const wrapper = shallow(<GifExpertApp></GifExpertApp>);
        expect(wrapper).toMatchSnapshot();
    });
 })
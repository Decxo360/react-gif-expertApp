import React from 'react';
import '@testing-library/jest-dom'
import { GifGrid } from "../../components/GifGrid"
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Trabajando en el componente GifGrid.js', () => {

    
    test('Debe de mostrarse correctamente', () => { 

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true,
        });
        const wrapper= shallow(<GifGrid category="samurai x"/>);
        expect(wrapper).toMatchSnapshot();

     });
    
     test('Debe de mostrar items cuando se cargan imagenes', () => { 

        const gifs = [{
            id:'123a',
            url:'https://yuutu.com',
            title:'cualquiercosa'
        }];

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        const wrapper= shallow(<GifGrid category="samurai x"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
      });
})
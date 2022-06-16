import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory"

describe('Trabajando en AddCategory.js', () => {

    const setCategories= jest.fn();
    let wrapper = shallow(<AddCategory setCategory={ setCategories }/>)

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory={ setCategories }/>)
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de cambiar la caja de texto', () => { 

        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change',{ 
            target:{value} 
        });
     })

     test('No debe de postear la informacion onSubmit', () => { 

        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
        
      })

      test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Wasap';
        input.simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        const input2 = wrapper.find('input').prop('value')
        expect(input2).toBe('');


      })
    
})
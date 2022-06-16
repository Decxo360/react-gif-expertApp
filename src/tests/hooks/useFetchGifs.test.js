import useFetchGifs from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/jest-dom'

describe('Trabajado en el hook useFetch', () => { 

test('Debe de retornar el estado inicial', () => { second })

// const {data, loading} = useFetchGifs('One punch');

const {result} = renderHook( () => useFetchGifs('one punch'));
const {data,loading} = result.current;


expect(data).toEqual([]);
expect(loading).toBe(true);

 })
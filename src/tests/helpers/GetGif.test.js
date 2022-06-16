import  {getGifs}  from "../../helpers/GetGifs"

describe('Pruebas en getGif', () => {
    test('debe de traer 10 elementos', async() => { 
        const gif = await getGifs("goku")
        expect(gif.length).toBe(10);
     })
})
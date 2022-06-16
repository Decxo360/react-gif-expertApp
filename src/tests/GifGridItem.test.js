import { shallow } from "enzyme";
import { GifGridItem } from "../components/GifGridItem";


describe('Se esta trabajando en GifGridItem', () => {
    const title = "Este es el titulo";
    const url = "https://www.youtube.com"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Tiene que imprimir el componente GifgridItem', () => {

        expect(wrapper).toMatchSnapshot();

    })
})
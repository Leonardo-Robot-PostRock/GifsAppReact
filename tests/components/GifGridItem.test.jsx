import GifGridItem from '../../src/components/GifGridItem';
import { render } from '@testing-library/react';

describe('Pruebas en el <GidGridItem />', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y con el ALT indicado',()=>{})
});

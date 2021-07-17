import 'match-media-mock';
import { screen } from '@testing-library/react';

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
]

import GameCardSlider from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<GameCardSlider /> ', () => {
  it('Shoud be able to render GameCardSlider component', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);



    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);

    // expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud be able to render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    // expect(container.firstChild).toMatchSnapshot();
  });
});

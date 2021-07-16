import 'match-media-mock';

import BannerSlider from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider /> ', () => {
  it('Shoud be able to render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);



    // Aqui eu verifico se existe uma classe chamada slick-vertical
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud be able to render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    // Aqui eu verifico se existem 2 slides no meu BannerSlider
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);

    expect(screen.getByRole('heading', { name: /Defy death 1/i, hidden: false })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Defy death 1/i, hidden: true })
    ).toBeInTheDocument();
  });

  it('Shoud be able to render dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);


    // Aqui eu verifico se existem os dots do slider
    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  });
});

import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home /> ', () => {
  it('Shoud be able to render menu and footer', () => {
    renderWithTheme(<Home {...props} />);


    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /won games/i })
    ).toHaveLength(2)
    // expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud be able to render the sections', () => {
    renderWithTheme(<Home {...props} />);


    expect(screen.getByRole('heading', { name: /News/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument();

  });

  it('Shoud be able to render the sections', () => {
    renderWithTheme(<Home {...props} />);

    //banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // Card Game (5 sections com 4 cards cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    //highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3);
  });
});

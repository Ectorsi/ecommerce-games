import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';
import * as S from './styles';
const props = {
  title: 'Borderlands 3',
  developer: 'Rockstar Games',
  img: '/img/game-borderlands.jpg',
  price: 'R$ 215,00'
}

describe('<GameCard /> ', () => {
  it('Shoud be able to render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: props.developer })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );
    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument();
  });

  it('Shoud be able to render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText('R$ 215,00');
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' });
  });

  it('Shoud be able to render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />);

    expect(screen.getByText('R$ 215,00')).toHaveStyle({
      textDecoration: 'line-through'
    });
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('Shoud be able to render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from Wishlist/i)).toBeInTheDocument();
  });

  it('Shoud be able to call onFav method when is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()

  });
  it('Shoud be able to render GameCard component with Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor='secondary'
        ribbonSize='small'
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });


});

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon /> ', () => {
  it('Shoud be able to render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud be able to render the default color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      'background-color': '#F231A5'
    })
  });

  it('Shoud be able to render the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '##3CD3C1'
    })
  });

  it('Shoud be able to render normal size by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      fontSize: '1.4rem',
      height: '3.6rem'
    })
  });

  it('Shoud be able to render small size', () => {
    renderWithTheme(<Ribbon size="small" >Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      fontSize: '1.2rem',
      height: '2.6rem'
    })
  });
});

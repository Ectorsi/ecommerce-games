import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Empty from '.';

const props = {
  title: 'Empty wishlist',
  description: 'A simple description',
  hasLink: false
}

describe('<Empty /> ', () => {
  it('Shoud be able to render Empty component', () => {
    renderWithTheme(<Empty {...props} hasLink />);

    expect(
      screen.getByRole('image', { name: /a gamer in a couch playing videogame/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/Empty wishlist/i)).toBeInTheDocument();
    expect(screen.getByText(/A simple description/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Go back to store/i })).toHaveAttribute('href', '/');
  });

  it('Shoud be able to render Empty component without the Link', () => {
    renderWithTheme(<Empty {...props} />);


    expect(screen.queryByRole('link', { name: /Go back to store/i })).not.toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  releaseDate: '2020-11-21T23:00:00',
  publisher: 'Walkabout',
  developer: 'Different Tales',
  platforms: ['windows', 'linux', 'mac'],
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
}

describe(' <GameDetails /> ', () => {
  it('Should be able to render GameDetails component', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('heading', { name: /Developer/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /release date/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Platforms/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /publisher/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument();
  });

  it('Should be able to render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /Linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Mac/i })).toBeInTheDocument();
  });

  it('should be able to render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should be able to render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should be able to render developer', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument();
  });

  it('should be able to render publisher', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/Walkabout/i)).toBeInTheDocument();
  });

  it('should be able to render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });
});

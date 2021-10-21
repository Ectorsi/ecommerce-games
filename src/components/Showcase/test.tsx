import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import highlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';

import Showcase from '.';

const props = {
    title: 'Most Popular',
    highlight: highlightMock,
    games: gamesMock.slice(0, 1)
};

describe('<Showcase /> ', () => {
    it('Shoud be able to render Showcase component as default', () => {
        const { container } = renderWithTheme(<Showcase {...props} />);

        expect(screen.getByText(/Most Popular/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: highlightMock.title })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: gamesMock[0].title })).toBeInTheDocument();


        expect(container.firstChild).toMatchSnapshot();
    });

    it('Shoud be able to render Showcase component without title', () => {
        renderWithTheme(<Showcase games={props.games} highlight={props.highlight} />);

        expect(screen.getByRole('heading', { name: gamesMock[0].title })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: highlightMock.title })).toBeInTheDocument();
        expect(screen.queryByText(/Most Popular/i)).not.toBeInTheDocument();
    });

    it('Shoud be able to render Showcase component without highlight', () => {
        renderWithTheme(<Showcase games={props.games} title={props.title} />);

        expect(screen.getByRole('heading', { name: gamesMock[0].title })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: highlightMock.title })).not.toBeInTheDocument();
        expect(screen.getByText(/Most Popular/i)).toBeInTheDocument();
    });

    it('Shoud be able to render Showcase component without games', () => {
        renderWithTheme(<Showcase title={props.title} highlight={props.highlight} />);

        expect(screen.queryByRole('heading', { name: gamesMock[0].title })).not.toBeInTheDocument();
        expect(screen.getByRole('heading', { name: highlightMock.title })).toBeInTheDocument();
        expect(screen.getByText(/Most Popular/i)).toBeInTheDocument();
    });
});

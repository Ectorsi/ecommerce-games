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
        renderWithTheme(<Showcase {...props} />);

        expect(screen.getByText(/Most Popular/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: highlightMock.title })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: gamesMock[0].title })).toBeInTheDocument();


        // expect(container.firstChild).toMatchSnapshot();
    });
});

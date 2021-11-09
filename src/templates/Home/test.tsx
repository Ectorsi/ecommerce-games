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

jest.mock('components/Menu', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Menu" />
        }
    };
});

jest.mock('components/Footer', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Footer" />
        }
    };
});

jest.mock('components/Showcase', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Showcase" />
        }
    };
});

jest.mock('components/BannerSlider', () => {
    return {
        __esModule: true,
        default: function Mock() {
            return <div data-testid="Mock Banner Slider" />
        }
    };
});

describe('<Home /> ', () => {
    it('Shoud be able to render menu and footer', () => {
        renderWithTheme(<Home {...props} />);

        expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
        expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument();
        expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5);
        expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();

        // expect(container.firstChild).toMatchSnapshot();
    });
});

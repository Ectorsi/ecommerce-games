import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth /> ', () => {
    it('Shoud be able to render all components and children', () => {
        const { debug, container } = renderWithTheme(
            <Auth title="Test">
                Auth test
            </Auth>
        );

        const logo1 = screen.getAllByLabelText(/won games/i)[0];
        expect(logo1.parentElement).toBeInTheDocument();

        const logo2 = screen.getAllByLabelText(/won games/i)[1];
        expect(logo2.parentElement).toBeInTheDocument();

        const heading = screen.getByText('All your favorite games in one place');
        expect(heading).toBeInTheDocument();

        const subtitle = screen.queryByText('is the best');
        expect(subtitle).toBeInTheDocument();
    });
});

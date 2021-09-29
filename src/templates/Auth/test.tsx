import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth /> ', () => {
    it('Shoud be able to render all components and children', () => {
        const { debug, container } = renderWithTheme(
            <Auth title="Auth Title">
                <input type="text" />
            </Auth>
        );

        // Verifiacr se tem duas logos
        expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

        // Verificar se tem o heading principal do banner
        expect(
            screen.getByRole('heading', {
                name: /All your favorite games in one place/i
            })
        ).toBeInTheDocument();

        //Verificar se há um subtítulo
        expect(
            screen.getByRole('heading', {
                name: /WON is the best and most complete gaming platform/i
            })
        ).toBeInTheDocument();

        //Verificar se há o título do content
        expect(
            screen.getByRole('heading', {
                name: /Auth Title/i
            })
        ).toBeInTheDocument();

        //Verificar se o children está sendo renderizado
        expect(screen.getByRole('textbox')).toBeInTheDocument();

    });
});

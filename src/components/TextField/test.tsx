import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField /> ', () => {
    it('Shoud be able to render TextField component with label', () => {
        const { container } = renderWithTheme(<TextField label="E-mail" labelFor="textField" />);

        expect(screen.getByText('E-mail')).toBeInTheDocument();
        expect(screen.getByText('E-mail')).toHaveAttribute(
            'for',
            'textField'
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('Shoud be able to render TextField component with initial value', () => {
        renderWithTheme(
            <TextField
                label="E-mail"
                labelFor="textField"
                initialValue="Teste"
            />);

        expect(screen.getByText('E-mail')).toBeInTheDocument();
    });
});

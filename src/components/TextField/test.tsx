import { Email } from '@styled-icons/material-outlined';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField /> ', () => {
    it('Shoud be able to render TextField component with label', () => {
        const { container } = renderWithTheme(
            <TextField label="E-mail" labelFor="textField" />
        );
        expect(screen.getByText('E-mail')).toBeInTheDocument();
        expect(screen.getByText('E-mail')).toHaveAttribute('for', 'textField');
        expect(container.firstChild).toMatchSnapshot();
    });

    it('Shoud be able to render TextField component without label', () => {
        renderWithTheme(<TextField />);

        expect(screen.queryByLabelText('label')).not.toBeInTheDocument();
    });

    it('Shoud be able to render TextField component with placeholder', () => {
        renderWithTheme(<TextField placeholder="placeholder" />);

        expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
    });

    it('Shoud be able to render TextField component with icon', () => {
        renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('Shoud be able to render icon on the right side', () => {
        renderWithTheme(
            <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
        );

        expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
    });

    it('Shoud be able to render TextField disabled', async () => {
        const onInput = jest.fn();
        renderWithTheme(
            <TextField
                onInput={onInput}
                label="TextField"
                labelFor="TextField"
                id="TextField"
                disabled
            />
        );
        const input = screen.getByRole('textbox');
        expect(input).toBeDisabled();

        const text = 'This is my new text';
        userEvent.type(input, text);

        await waitFor(() => {
            expect(input).not.toHaveValue();
        })
        expect(onInput).not.toHaveBeenCalled();
    });

    it('Shoud be able to render TextField accessible by TAB', () => {
        renderWithTheme(
            <TextField
                label="TextField"
                labelFor="TextField"
            />
        );
        const input = screen.getByRole('textbox');
        expect(document.body).toHaveFocus();

        userEvent.tab();
        expect(input).toHaveFocus();

    });

    it('Shoud be able to render changes its value when typing', async () => {
        const onInput = jest.fn();
        renderWithTheme(
            <TextField
                onInput={onInput}
                label="TextField"
                labelFor="TextField"
                id="TextField"
            />
        );

        const input = screen.getByLabelText('TextField');
        const text = 'This is my new text';

        userEvent.type(input, text);

        await waitFor(() => {
            expect(input).toHaveValue(text);
            expect(onInput).toHaveBeenCalledTimes(text.length);
        });
    });
});

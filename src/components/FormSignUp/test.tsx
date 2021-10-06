import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignUp from '.';

describe('<FormSignUp /> ', () => {
    it('Shoud be able to render FormSignUp component', () => {
        const { container } = renderWithTheme(<FormSignUp />);

        // Verificar Name
        const inputName = screen.getByPlaceholderText(/Name/i);
        expect(inputName).toBeInTheDocument();
        // Verificar E-mail
        const inputEmail = screen.getByPlaceholderText(/Email/i);
        expect(inputEmail).toBeInTheDocument();
        // Verificar Password
        const inputPassword = screen.getByPlaceholderText('Password');
        expect(inputPassword).toBeInTheDocument();
        // Verificar confirmPassword
        const inputConfirmPassword = screen.getByPlaceholderText(/Confirm Password/i);
        expect(inputConfirmPassword).toBeInTheDocument();
        // Verificar Button
        const button = screen.getByRole('button', { name: /Sign up now/i });
        expect(button).toBeInTheDocument();

        expect(container.parentElement).toMatchSnapshot();

    });
    it('Shoud be able to render text and link to signUp', () => {
        renderWithTheme(<FormSignUp />);

        // Verificar text
        const text = screen.getByText(/Already have account\?/i);
        expect(text).toBeInTheDocument();

        // Verificar Link
        const linkSignUp = screen.getByRole('link', { name: /Sign In/i });
        expect(linkSignUp).toBeInTheDocument();
    });
});

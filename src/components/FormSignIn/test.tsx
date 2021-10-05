import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignIn from '.';

describe('<FormSignIn /> ', () => {
    it('Shoud be able to render FormSignIn component', () => {
        const { container } = renderWithTheme(<FormSignIn />);

        // Verificar E-mail
        const inputEmail = screen.getByPlaceholderText(/Email/i);
        expect(inputEmail).toBeInTheDocument();
        // Verificar Password
        const inputPassword = screen.getByPlaceholderText(/password/i);
        expect(inputPassword).toBeInTheDocument();
        // Verificar Button
        const button = screen.getByRole('button', { name: /Sign in now/i });
        expect(button).toBeInTheDocument();

        expect(container.parentElement).toMatchSnapshot();

    });

    it('Shoud be able to render the forgotPassowrd link', () => {
        renderWithTheme(<FormSignIn />);

        const linkForgotPassword = screen.getByRole('link', { name: /Forgot your password\?/i });
        expect(linkForgotPassword).toBeInTheDocument();
    });
    it('Shoud be able to render text and link to signUp', () => {
        renderWithTheme(<FormSignIn />);

        // Verificar text
        const text = screen.getByText(/Don't have account\?/i);
        expect(text).toBeInTheDocument();

        // Verificar Link
        const linkSignUp = screen.getByRole('link', { name: /Sign Up/i });
        expect(linkSignUp).toBeInTheDocument();
    });
});

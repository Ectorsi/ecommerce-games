import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu /> ', () => {
    it('Shoud the render Menu', () => {
        renderWithTheme(
            <Menu />);

        expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();

    });

    it('Shoud handle the open/close mobile menu', () => {
        renderWithTheme(<Menu />);

        // selecionar o nosso MenuFull
        const fullMenuElement = screen.getByRole('navigation', { hidden: true });

        // verificar se o menu tá escondido
        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });
        // clicar no botão de abrir o menu e verificar se ele abriu
        fireEvent.click(screen.getByLabelText(/open menu/i));
        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
        expect(fullMenuElement).toHaveStyle({ opacity: 1 });
        // clicar no botão de fechar o menu e verificar se ele fechou
        fireEvent.click(screen.getByLabelText(/close menu/i));
        expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
        expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    });

    it('Should show resgister box when logged out', () => {
        renderWithTheme(<Menu />)

        expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();

        expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
        expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    })

    it('should show wishlight and account when logged in', () => {
        renderWithTheme(<Menu username="Ector" />)

        expect(screen.getByText(/my account/i)).toBeInTheDocument()
        expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()

        expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    })
});

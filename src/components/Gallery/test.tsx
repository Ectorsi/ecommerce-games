import 'match-media-mock';
import { fireEvent, screen } from '@testing-library/react';

import Gallery from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import mockItems from './mock';

describe('<Gallery /> ', () => {
    it('Shoud be able to render thumbnails as buttons', () => {
        renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

        //Verificando se a source do primeiro thumbnail é a mesma do primeiro item do mock
        expect(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
        ).toHaveAttribute('src', mockItems[0].src);

        expect(screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
        ).toHaveAttribute('src', mockItems[1].src);
    });

    it('Shoud handle open modal', () => {
        renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

        // selecionar o nosso Modal
        const modal = screen.getByLabelText('modal');

        // verificar se o menu tá escondido
        expect(modal.getAttribute('aria-hidden')).toBe('true');
        expect(modal).toHaveStyle({ opacity: 0 });
        // clicar no botão de abrir o modal e verificar se ele abriu
        fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }));
        expect(modal.getAttribute('aria-hidden')).toBe('false');
        expect(modal).toHaveStyle({ opacity: 1 });

    });

    it('Shoud handle close modal when overlay or button clicked', () => {
        renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);
        // selecionar o nosso Modal
        const modal = screen.getByLabelText('modal');
        // clicar no botão de abrir o modal e verificar se ele abriu
        fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }));

        //clicar no botão de fechar o menu e verificar se ele fechou
        fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
        expect(modal.getAttribute('aria-hidden')).toBe('true');
        expect(modal).toHaveStyle({ opacity: 0 });

    });
});

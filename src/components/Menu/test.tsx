import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu /> ', () => {
  it('Shoud the render Menu', () => {
    renderWithTheme(
      <Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()

  });

  it('Shoud handle the open/close mobile menu', () => {
    renderWithTheme(
      <Menu />);

    // selecionar o nosso MenuFull

    // verificar se o menu tá escondido

    // clicar no botão de abrir o menu e verificar se ele abriu

    // clicar no botão de fechar o menu e verificar se ele fechou

  });
});

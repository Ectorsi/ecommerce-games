import { render, screen } from '@testing-library/react';

import Menu from '.';

describe('<Menu /> ', () => {
  it('Shoud be able to render Menu component', () => {
    const { container } = render(
      <Menu />);

    expect(screen.getByRole('heading', { name: /Menu/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';

import TextField from '.';

describe('<TextField /> ', () => {
  it('Shoud be able to render TextField component', () => {
    const { container } = render(
      <TextField />);

    expect(screen.getByRole('heading', { name: /TextField/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

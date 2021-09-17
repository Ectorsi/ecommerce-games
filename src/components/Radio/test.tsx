import { render, screen } from '@testing-library/react';

import Radio from '.';

describe('<Radio /> ', () => {
  it('Shoud be able to render Radio component', () => {
    const { container } = render(
      <Radio />);

    expect(screen.getByRole('heading', { name: /Radio/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

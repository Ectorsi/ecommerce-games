import { render, screen } from '@testing-library/react';

import Checkbox from '.';

describe('<Checkbox /> ', () => {
  it('Shoud be able to render Checkbox component', () => {
    const { container } = render(
      <Checkbox />);


    // expect(container.firstChild).toMatchSnapshot();
  });
});

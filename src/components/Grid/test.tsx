import { renderWithTheme } from 'utils/tests/helpers';

import { Grid } from '.';

describe('<Grid /> ', () => {
  it('Shoud be able to render Grid component', () => {
    const { container } = renderWithTheme(<Grid />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
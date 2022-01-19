import { renderWithTheme } from 'utils/tests/helpers';
import { Divider } from '.';

describe('<Divider /> ', () => {
  it('Shoud be able to render Divider component', () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

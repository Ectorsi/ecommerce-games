import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'url',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};

describe('<Banner /> ', () => {
  it('Shoud be able to render correctly', () => {
    renderWithTheme(<Banner {...props} />);



    expect(screen.getByRole('img', { name: /Defy death/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
});

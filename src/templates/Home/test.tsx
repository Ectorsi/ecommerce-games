import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

describe('<Home /> ', () => {
  it('Shoud be able to render menu and footer', () => {
    renderWithTheme(<Home />);


    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument();
    // expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud be able to render the sections', () => {
    renderWithTheme(<Home />);


    expect(screen.getByRole('heading', { name: /News/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument();

  });
});

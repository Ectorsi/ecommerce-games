import { render, screen } from '@testing-library/react';

import GameDetails from '.';

describe('
<GameDetails /> ', () => {
it('Shoud be able to render GameDetails component', () => {
const { container } = render(
<GameDetails />);

expect(screen.getByRole('heading', { name: /GameDetails/i })
).toBeInTheDocument();

expect(container.firstChild).toMatchSnapshot();
});
});

import { render, screen } from '@testing-library/react';

import Game from '.';

describe('
<Game /> ', () => {
it('Shoud be able to render Game component', () => {
const { container } = render(
<Game />);

expect(screen.getByRole('heading', { name: /Game/i })
).toBeInTheDocument();

expect(container.firstChild).toMatchSnapshot();
});
});

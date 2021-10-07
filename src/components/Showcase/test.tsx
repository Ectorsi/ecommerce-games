import { render, screen } from '@testing-library/react';

import Showcase from '.';

describe('
<Showcase /> ', () => {
it('Shoud be able to render Showcase component', () => {
const { container } = render(
<Showcase />);

expect(screen.getByRole('heading', { name: /Showcase/i })
).toBeInTheDocument();

expect(container.firstChild).toMatchSnapshot();
});
});

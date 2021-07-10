import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('
<Footer /> ', () => {
it('Shoud be able to render Footer component', () => {
const { container } = render(
<Footer />);

expect(screen.getByRole('heading', { name: /Footer/i })
).toBeInTheDocument();

expect(container.firstChild).toMatchSnapshot();
});
});

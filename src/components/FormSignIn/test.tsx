import { render, screen } from '@testing-library/react';

import FormSignIn from '.';

describe('
<FormSignIn /> ', () => {
it('Shoud be able to render FormSignIn component', () => {
const { container } = render(
<FormSignIn />);

expect(screen.getByRole('heading', { name: /FormSignIn/i })
).toBeInTheDocument();

expect(container.firstChild).toMatchSnapshot();
});
});

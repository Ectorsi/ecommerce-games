import { render, screen } from '@testing-library/react';

import Button from '.';

describe('
<Button /> ', () => {
it('Shoud be able to render Button component', () => {
const { container } = render(
<Button />);

expect(screen.getByRole('heading', { name: /Button/i })
).toBeInTheDocument();

expect(container.firstChild).toMatchSnapshot();
});
});

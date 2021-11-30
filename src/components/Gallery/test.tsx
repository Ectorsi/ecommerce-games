import { render, screen } from '@testing-library/react';

import Gallery from '.';

describe('<Gallery /> ', () => {
    it('Shoud be able to render Gallery component', () => {
        const { container } = render(<Gallery />);

        expect(screen.getByRole('heading', { name: /Gallery/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});

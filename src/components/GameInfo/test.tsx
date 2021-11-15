import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
    title: 'My Game Info',
    description: 'Game Description',
    price: 'R$ 210,00'
};

describe('<GameInfo /> ', () => {
    it('Shoud be able to render Game informations', () => {
        const { container } = renderWithTheme(<GameInfo {...props} />);

        // Heading
        const title = screen.getByRole('heading', { name: /My Game Info/i });
        expect(title).toBeInTheDocument();
        // Description
        const description = screen.getByText(/Game Description/i);
        expect(description).toBeInTheDocument();
        // Price
        const price = screen.getByText(/R\$ 210,00/i);
        expect(price).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
    it('Shoud be able to render GameInfo Buttons', () => {
        renderWithTheme(<GameInfo {...props} />);

        //add to cart
        const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
        expect(addToCartButton).toBeInTheDocument();
        // Wishlist
        const wishlistButton = screen.getByRole('button', { name: /wishlist/i });
        expect(wishlistButton).toBeInTheDocument();
    });
});

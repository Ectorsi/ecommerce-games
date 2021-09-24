import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox /> ', () => {
    it('Shoud be able to render with label', () => {
        const { container } = renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
            'for',
            'check'
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('Shoud be able to render without label', () => {
        renderWithTheme(<Checkbox />);

        expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
    });
    it('Shoud be able to render with black label', () => {
        renderWithTheme(
            <Checkbox
                label="checkbox label"
                labelFor="check"
                labelColor="black"
            />
        );

        expect(screen.getByText(/checkbox label/i)).toHaveStyle({
            color: '#030517'
        });
    });
    it('Shoud dispatch onChange when label status changes', async () => {
        const onCheck = jest.fn();
        const container = renderWithTheme(
            <Checkbox label="Checkbox" onCheck={onCheck} />
        );
        //Todas as vezes que eu usar states, tenho que usar async/await nos testes
        expect(onCheck).not.toHaveBeenCalled();
        userEvent.click(screen.getByRole('checkbox'));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenLastCalledWith(true);
    });
    it('Shoud dispatch onChange when label status changes', async () => {
        const onCheck = jest.fn();
        renderWithTheme(
            <Checkbox label="Checkbox" onCheck={onCheck} isChecked />
        );
        userEvent.click(screen.getByRole('checkbox'));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledWith(false);
        });
    });
    it('Shoud be accessible with tab', async () => {
        renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

        expect(document.body).toHaveFocus();

        userEvent.tab();

        expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
    });
});

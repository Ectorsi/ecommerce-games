import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';
import Radio from '.';

describe('<Radio /> ', () => {
    it('Shoud be able to render Radio component with label', () => {
        const { container } = renderWithTheme(<Radio label="RadioButton label" labelFor="radio" />);

        expect(screen.getByRole('radio')).toBeInTheDocument();
        expect(screen.getByLabelText(/radioButton label/i)).toBeInTheDocument();
        expect(screen.getByText(/radio/i)).toHaveAttribute(
            'for',
            'radio',
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('Shoud be able to render Radio component without label', () => {
        renderWithTheme(<Radio />);
        expect(screen.queryByLabelText(/radioButton label/i)).not.toBeInTheDocument();
    });

    it('Shoud be able to render Radio component with black label', () => {
        renderWithTheme(<Radio label="RadioButton label" labelFor="radio" labelColor="black" />);
        expect(screen.getByText(/radioButton label/i)).toHaveStyle({
            color: '#030517'
        });
    });

    it('Shoud dispath onChange when label status changes', async () => {
        const onCheck = jest.fn();
        renderWithTheme(
            <Radio
                label="RadioButton label"
                onCheck={onCheck}
            />
        );
        expect(onCheck).not.toHaveBeenCalled();
        userEvent.click(screen.getByRole('radio'));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
    });

    it('should be able acessible with tab', () => {
        renderWithTheme(
            <Radio
                label="RadioButton label"
                labelFor="radio"
            />
        );

        expect(document.body).toHaveFocus();
        userEvent.tab();
        expect(screen.getByLabelText(/radioButton label/i)).toHaveFocus();

    });
});

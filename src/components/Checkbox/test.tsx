import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox /> ', () => {
  it('Shoud be able to render with label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
    // expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud be able to render without label', () => {
    renderWithTheme(
      <Checkbox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()

  });
  it('Shoud be able to render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />);

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  });
  it('Shoud dispatch onChange when label status changes', () => {
    const onCheck = jest.fn();
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled();



  });
});

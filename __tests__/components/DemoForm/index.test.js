import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { DemoForm } from '@/components/DemoForm';

describe('DemoForm', () => {
  it('Renders the correct initial value', () => {
    render(<DemoForm initialValue="test"/>);

    expect(
      screen.getByText('The value is: test')
    ).toBeInTheDocument();
  });

  it('Updates on submit', async () => {
    const { findByTestId } = render(<DemoForm initialValue="test"/>);

    const input = await findByTestId('input');
    const button = await findByTestId('button');

    fireEvent.change(input, {
      target: {
        value: 'mock',
      },
    });

    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText('The value is: mock')
      ).toBeInTheDocument();
    });
  });

  it('Renders correct snapshot', async () => {
    const { container } = render(<DemoForm initialValue="test"/>);

    expect(
      container
    ).toMatchSnapshot();
  });
});

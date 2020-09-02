import { render, screen } from '@testing-library/react';
import { ValueDisplay } from '@/components/ValueDisplay';

describe('ValueDisplay', () => {
  it('Renders the correct value', () => {
    render(<ValueDisplay value="test" />);

    expect(
      screen.getByText('The value is: test')
    ).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { Input } from '@/components/ui/Input';

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" id="email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('displays error message when provided', () => {
    render(<Input label="Email" id="email" error="Email is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });

  it('does not display error when not provided', () => {
    render(<Input label="Email" id="email" />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('applies error border style when error is present', () => {
    render(<Input label="Email" id="email" error="Required" />);
    expect(screen.getByLabelText('Email')).toHaveClass('border-red-500');
  });

  it('passes through HTML attributes', () => {
    render(
      <Input
        label="Email"
        id="email"
        placeholder="Enter email"
        type="email"
      />,
    );
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('placeholder', 'Enter email');
    expect(input).toHaveAttribute('type', 'email');
  });
});

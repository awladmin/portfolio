import { render, screen } from '@testing-library/react';
import { Textarea } from '@/components/ui/Textarea';

describe('Textarea', () => {
  it('renders with label', () => {
    render(<Textarea label="Message" id="message" />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('displays error message when provided', () => {
    render(
      <Textarea label="Message" id="message" error="Message is required" />,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Message is required');
  });

  it('does not display error when not provided', () => {
    render(<Textarea label="Message" id="message" />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('passes through HTML attributes', () => {
    render(
      <Textarea
        label="Message"
        id="message"
        rows={4}
        placeholder="Enter message"
      />,
    );
    const textarea = screen.getByLabelText('Message');
    expect(textarea).toHaveAttribute('rows', '4');
    expect(textarea).toHaveAttribute('placeholder', 'Enter message');
  });
});

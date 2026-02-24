import { render, screen } from '@testing-library/react';
import { Card } from '@/components/ui/Card';

describe('Card', () => {
  it('renders children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>,
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies base styles', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass('bg-white', 'rounded-xl');
  });

  it('merges custom className', () => {
    const { container } = render(<Card className="extra">Content</Card>);
    expect(container.firstChild).toHaveClass('extra');
  });
});

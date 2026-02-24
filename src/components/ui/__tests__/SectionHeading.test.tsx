import { render, screen } from '@testing-library/react';
import { SectionHeading } from '@/components/ui/SectionHeading';

describe('SectionHeading', () => {
  it('renders title', () => {
    render(<SectionHeading title="Features" />);
    expect(
      screen.getByRole('heading', { name: 'Features' }),
    ).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(
      <SectionHeading title="Features" subtitle="Our best features" />,
    );
    expect(screen.getByText('Our best features')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = render(<SectionHeading title="Features" />);
    expect(container.querySelectorAll('p')).toHaveLength(0);
  });
});

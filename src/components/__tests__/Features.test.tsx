import { render, screen } from '@testing-library/react';
import { Features } from '@/components/Features';
import { FEATURES } from '@/lib/constants';

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />);
    expect(
      screen.getByRole('heading', { name: 'Features' }),
    ).toBeInTheDocument();
  });

  it('renders all feature titles', () => {
    render(<Features />);
    FEATURES.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
    });
  });

  it('renders all feature descriptions', () => {
    render(<Features />);
    FEATURES.forEach((feature) => {
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });
});

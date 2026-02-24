import { render, screen } from '@testing-library/react';
import { Stats } from '@/components/Stats';
import { STATS } from '@/lib/constants';

describe('Stats', () => {
  it('renders the section heading', () => {
    render(<Stats />);
    expect(
      screen.getByRole('heading', { name: 'By the Numbers' }),
    ).toBeInTheDocument();
  });

  it('renders all stat values', () => {
    render(<Stats />);
    STATS.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    });
  });

  it('renders all stat labels', () => {
    render(<Stats />);
    STATS.forEach((stat) => {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });
});

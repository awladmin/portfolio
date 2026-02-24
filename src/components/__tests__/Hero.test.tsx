import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';
import { SITE_NAME } from '@/lib/constants';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('includes the site name in the heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      new RegExp(SITE_NAME),
    );
  });

  it('renders call-to-action links', () => {
    render(<Hero />);
    expect(screen.getByText('Get in Touch')).toHaveAttribute(
      'href',
      '#contact',
    );
    expect(screen.getByText('Learn More')).toHaveAttribute(
      'href',
      '#features',
    );
  });
});

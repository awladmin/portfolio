import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

describe('Footer', () => {
  it('renders the site name', () => {
    render(<Footer />);
    expect(screen.getByText(SITE_NAME)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    NAV_LINKS.forEach((link) => {
      const anchor = screen.getByRole('link', { name: link.label });
      expect(anchor).toHaveAttribute('href', link.href);
    });
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});

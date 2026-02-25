import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';
import { SITE_NAME, NAV_LINKS } from '@/lib/constants';

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />);

    expect(screen.getByText(SITE_NAME)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);

    NAV_LINKS.forEach((link) => {
      const el = screen.getByText(link.label);
      expect(el).toHaveAttribute('href', link.href);
    });
  });
});

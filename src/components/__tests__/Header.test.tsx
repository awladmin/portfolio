import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { SITE_NAME, NAV_LINKS } from '@/lib/constants';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
    })),
  });
});

describe('Header', () => {
  it('renders the site name', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    expect(screen.getByText(SITE_NAME)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    NAV_LINKS.forEach((link) => {
      const el = screen.getByText(link.label);
      expect(el).toHaveAttribute('href', link.href);
    });
  });

  it('renders a theme toggle button', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('button', { name: /switch to dark mode/i }),
    ).toBeInTheDocument();
  });

  it('toggles to dark mode on click', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    await user.click(
      screen.getByRole('button', { name: /switch to dark mode/i }),
    );

    expect(
      screen.getByRole('button', { name: /switch to light mode/i }),
    ).toBeInTheDocument();
  });
});

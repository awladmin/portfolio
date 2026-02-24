import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

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

describe('ThemeToggle', () => {
  it('renders a toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
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
        <ThemeToggle />
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

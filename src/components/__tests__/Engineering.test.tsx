import { render, screen } from '@testing-library/react';
import { Engineering } from '@/components/Engineering';

describe('Engineering', () => {
  it('renders the section heading', () => {
    render(<Engineering />);
    expect(
      screen.getByRole('heading', { name: 'How This Portfolio Is Built' }),
    ).toBeInTheDocument();
  });

  it('renders quality gate commands', () => {
    render(<Engineering />);
    expect(screen.getByText('pnpm typecheck')).toBeInTheDocument();
    expect(screen.getByText('pnpm lint')).toBeInTheDocument();
    expect(screen.getByText('pnpm test')).toBeInTheDocument();
    expect(screen.getByText('pnpm e2e')).toBeInTheDocument();
  });

  it('mentions Storybook documentation', () => {
    render(<Engineering />);
    expect(
      screen.getByText(
        'UI primitives are documented in Storybook with stories colocated in',
        { exact: false },
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('pnpm storybook')).toBeInTheDocument();
  });
});

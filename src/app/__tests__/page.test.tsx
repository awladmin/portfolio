import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

vi.mock('@/components/RepoInsights', () => ({
  RepoInsights: () => (
    <section id="repo">
      <h2>Repo Insights</h2>
    </section>
  ),
}));

describe('Home Page', () => {
  it('renders the hero section with heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the features section', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'Features' }),
    ).toBeInTheDocument();
  });

  it('renders the engineering section', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'How This Portfolio Is Built' }),
    ).toBeInTheDocument();
  });

  it('renders the repo insights section', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'Repo Insights' }),
    ).toBeInTheDocument();
  });

  it('renders the stats section', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'By the Numbers' }),
    ).toBeInTheDocument();
  });

  it('renders the testimonials section', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'What People Are Saying' }),
    ).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'Get in Touch' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('renders the footer with site name', () => {
    render(<Home />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders all major sections within main', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main.children.length).toBeGreaterThanOrEqual(6);
  });
});

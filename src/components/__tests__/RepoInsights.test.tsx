import { render, screen } from '@testing-library/react';
import { RepoInsights } from '@/components/RepoInsights';
import { getRepoData } from '@/lib/github';

vi.mock('@/lib/github', () => ({
  getRepoData: vi.fn(),
}));

describe('RepoInsights', () => {
  it('renders the section heading', async () => {
    vi.mocked(getRepoData).mockResolvedValue({
      name: 'portfolio',
      fullName: 'awladmin/portfolio',
      description: 'Test',
      url: 'https://github.com/awladmin/portfolio',
      stars: 12,
      forks: 3,
      openIssues: 1,
      watchers: 2,
      language: 'TypeScript',
      defaultBranch: 'main',
      updatedAt: '2026-02-20T10:00:00.000Z',
      pushedAt: '2026-02-21T10:00:00.000Z',
    });

    render(await RepoInsights());
    expect(
      screen.getByRole('heading', { name: 'Repo Insights' }),
    ).toBeInTheDocument();
  });

  it('renders repository action links', async () => {
    vi.mocked(getRepoData).mockResolvedValue({
      name: 'portfolio',
      fullName: 'awladmin/portfolio',
      description: 'Test',
      url: 'https://github.com/awladmin/portfolio',
      stars: 12,
      forks: 3,
      openIssues: 1,
      watchers: 2,
      language: 'TypeScript',
      defaultBranch: 'main',
      updatedAt: '2026-02-20T10:00:00.000Z',
      pushedAt: '2026-02-21T10:00:00.000Z',
    });

    render(await RepoInsights());
    expect(
      screen.getByRole('link', { name: 'Open Repository' }),
    ).toHaveAttribute('href', 'https://github.com/awladmin/portfolio');
    expect(
      screen.getByRole('link', { name: 'Pull Requests' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'CI Runs' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Issues' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Commit History' }),
    ).toBeInTheDocument();
  });
});

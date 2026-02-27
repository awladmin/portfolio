import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getRepoData } from '@/lib/github';

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

const formatDate = (value: string): string => {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(value));
};

export const RepoInsights = async () => {
  let repo = null;

  try {
    repo = await getRepoData();
  } catch {
    repo = null;
  }

  return (
    <section id="repo" className="py-20 px-6 bg-slate-50">
      <SectionHeading
        title="Repo Insights"
        subtitle="Live repository metrics and direct links to project activity."
      />

      <div className="max-w-5xl mx-auto">
        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                awladmin/portfolio
              </h3>
              <p className="mt-2 text-slate-600">
                Explore commits, pull requests, CI runs, and issue history in the
                public repository.
              </p>
            </div>
            <a
              href="https://github.com/awladmin/portfolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Open Repository
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-600">Stars</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {repo ? formatNumber(repo.stars) : 'N/A'}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-600">Forks</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {repo ? formatNumber(repo.forks) : 'N/A'}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-600">Open Issues</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {repo ? formatNumber(repo.openIssues) : 'N/A'}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-sm text-slate-600">Watchers</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {repo ? formatNumber(repo.watchers) : 'N/A'}
              </p>
            </div>
          </div>

          {repo && (
            <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-600 md:grid-cols-3">
              <p>
                <span className="font-medium text-slate-900">Primary language:</span>{' '}
                {repo.language ?? 'Not specified'}
              </p>
              <p>
                <span className="font-medium text-slate-900">Default branch:</span>{' '}
                {repo.defaultBranch}
              </p>
              <p>
                <span className="font-medium text-slate-900">Last push:</span>{' '}
                {formatDate(repo.pushedAt)}
              </p>
            </div>
          )}

          {!repo && (
            <p className="mt-6 text-sm text-red-600">
              Could not load repository metrics right now.
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/awladmin/portfolio/pulls"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
            >
              Pull Requests
            </a>
            <a
              href="https://github.com/awladmin/portfolio/actions"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
            >
              CI Runs
            </a>
            <a
              href="https://github.com/awladmin/portfolio/issues"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
            >
              Issues
            </a>
            <a
              href="https://github.com/awladmin/portfolio/commits/main"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
            >
              Commit History
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

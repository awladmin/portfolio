import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

const ENGINEERING_STACK = [
  'Next.js 15 (App Router)',
  'React 19',
  'TypeScript 5',
  'Tailwind CSS',
];

const QUALITY_GATES = [
  'pnpm typecheck',
  'pnpm lint',
  'pnpm test',
  'pnpm e2e',
];

export function Engineering() {
  return (
    <section id="engineering" className="py-20 px-6 bg-white">
      <SectionHeading
        title="How This Portfolio Is Built"
        subtitle="A production-style setup focused on maintainability, quality, and clear engineering standards."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-slate-900">Engineering Stack</h3>
          <p className="mt-2 text-slate-600">
            Built as a real application, not a static template.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ENGINEERING_STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900">Quality Gates</h3>
          <p className="mt-2 text-slate-600">
            Every change is validated by automated checks locally and in CI.
          </p>
          <ul className="mt-4 space-y-2">
            {QUALITY_GATES.map((command) => (
              <li key={command}>
                <code className="inline-block rounded-md bg-slate-100 px-2 py-1 text-sm text-slate-800">
                  {command}
                </code>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900">Component System</h3>
          <p className="mt-2 text-slate-600">
            UI primitives are documented in Storybook with stories colocated in{' '}
            <code>src/components/ui/__stories__</code>.
          </p>
          <p className="mt-3 text-slate-600">
            Run <code>pnpm storybook</code> to explore interactive component docs.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900">Testing + APIs</h3>
          <p className="mt-2 text-slate-600">
            Vitest + React Testing Library cover unit and integration behavior.
            Cypress covers end-to-end and accessibility via cypress-axe.
          </p>
          <p className="mt-3 text-slate-600">
            Next.js API routes include contact handling and a protected revalidate
            endpoint.
          </p>
        </Card>
      </div>
    </section>
  );
}

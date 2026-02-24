import { SectionHeading } from '@/components/ui/SectionHeading';
import { STATS } from '@/lib/constants';

export function Stats() {
  return (
    <section id="stats" className="py-20 px-6">
      <SectionHeading title="By the Numbers" />
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.id}>
            <p className="text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

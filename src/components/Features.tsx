import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES } from '@/lib/constants';

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <SectionHeading
        title="Features"
        subtitle="Everything you need to build and ship with confidence."
      />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((feature) => (
          <Card key={feature.id}>
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

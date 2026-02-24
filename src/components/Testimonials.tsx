import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <SectionHeading title="What People Are Saying" />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.id}>
            <blockquote className="text-slate-700 dark:text-slate-300 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold text-slate-900 dark:text-white">
                {testimonial.author}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

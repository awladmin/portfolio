import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/lib/constants';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50">
      <SectionHeading title="What People Are Saying" />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.id}>
            <blockquote className="text-slate-700 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold text-slate-900">
                {testimonial.author}
              </p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

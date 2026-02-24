import { render, screen } from '@testing-library/react';
import { Testimonials } from '@/components/Testimonials';
import { TESTIMONIALS } from '@/lib/constants';

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />);
    expect(
      screen.getByRole('heading', { name: 'What People Are Saying' }),
    ).toBeInTheDocument();
  });

  it('renders all testimonial quotes', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((testimonial) => {
      expect(
        screen.getByText(new RegExp(testimonial.quote)),
      ).toBeInTheDocument();
    });
  });

  it('renders all testimonial authors', () => {
    render(<Testimonials />);
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(testimonial.author)).toBeInTheDocument();
    });
  });
});

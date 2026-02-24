import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/features/contact-form/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}

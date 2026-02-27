import { Hero } from '@/components/Hero';
import { Engineering } from '@/components/Engineering';
import { RepoInsights } from '@/components/RepoInsights';
import { Features } from '@/components/Features';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/features/contact-form/ContactForm';
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Engineering />
      <RepoInsights />
      <Features />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;

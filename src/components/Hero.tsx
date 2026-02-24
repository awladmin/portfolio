import { SITE_NAME } from '@/lib/constants';

export function Hero() {
  return (
    <section className="py-24 px-6 text-center">
      <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
        Ship faster with {SITE_NAME}
      </h1>
      <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
        A modern full-stack application built with Next.js, TypeScript, and
        production-grade tooling.
      </p>
      <div className="mt-10 flex gap-4 justify-center">
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="#features"
          className="px-6 py-3 rounded-lg font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

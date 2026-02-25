import type { Feature, Stat, Testimonial } from '@/types';

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Port Xample';

export const FORM_STATUS = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS];

export const FEATURES: Feature[] = [
  {
    id: 'performance',
    title: 'Built for Performance',
    description:
      'Optimized from the ground up with server-side rendering, edge caching, and minimal client-side JavaScript.',
    icon: '\u26A1',
  },
  {
    id: 'type-safe',
    title: 'Type-Safe by Default',
    description:
      'End-to-end type safety with TypeScript across the full stack, from database queries to API responses.',
    icon: '\uD83D\uDD12',
  },
  {
    id: 'testing',
    title: 'Tested and Reliable',
    description:
      'Comprehensive test coverage with unit, integration, and end-to-end tests baked into the development workflow.',
    icon: '\u2705',
  },
];

export const STATS: Stat[] = [
  { id: 'uptime', value: '99.9%', label: 'Uptime' },
  { id: 'lighthouse', value: '100', label: 'Lighthouse Score' },
  { id: 'deploy-time', value: '<30s', label: 'Deploy Time' },
  { id: 'test-coverage', value: '95%', label: 'Test Coverage' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'The developer experience is outstanding. Deployments are fast, the code is clean, and the tooling just works.',
    author: 'Alex Chen',
    role: 'Engineering Lead',
  },
  {
    id: 'testimonial-2',
    quote:
      'We migrated our entire frontend to this stack and saw immediate improvements in performance and team velocity.',
    author: 'Sarah Mitchell',
    role: 'CTO, StartupCo',
  },
];

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#stats', label: 'Stats' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
] as const;

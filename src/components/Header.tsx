import { SITE_NAME, NAV_LINKS } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-slate-900">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="32" height="32" rx="8" className="fill-slate-900" />
            <text x="16" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="18" className="fill-white">D</text>
          </svg>
          {SITE_NAME}
        </a>
        <nav aria-label="Main" className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

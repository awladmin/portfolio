'use client';

import { SITE_NAME, NAV_LINKS } from '@/lib/constants';
import { useTheme } from './ThemeProvider';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="32" height="32" rx="8" className="fill-slate-900 dark:fill-white" />
            <text x="16" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="18" className="fill-white dark:fill-slate-900">D</text>
          </svg>
          {SITE_NAME}
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '\u{1F319}' : '\u{2600}\u{FE0F}'}
          </button>
        </div>
      </div>
    </header>
  );
}

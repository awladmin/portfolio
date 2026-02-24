import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_NAME } from '@/lib/constants';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import './globals.css';

// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-sigma-rust-22.vercel.app';
const description =
  'A modern full-stack application built with Next.js and TypeScript.';

export const metadata: Metadata = {
  title: SITE_NAME,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: SITE_NAME,
    description,
    url: siteUrl,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: siteUrl,
    },
    {
      '@type': 'Person',
      name: 'Danny Jordan',
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}

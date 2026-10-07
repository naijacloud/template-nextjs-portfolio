import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { site } from '@/content/site';
import './globals.css';

export const dynamic = 'force-dynamic';

export function generateMetadata(): Metadata {
  return {
    title: { default: `${site.name}, ${site.role}`, template: `%s · ${site.name}` },
    description: site.intro,
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <header className="bar">
            <Link href="/" className="brand">
              {site.name}
            </Link>
            <nav>
              <Link href="/#work">Work</Link>
              <Link href="/#about">About</Link>
              <a href={`mailto:${site.email}`}>Contact</a>
            </nav>
          </header>
          {children}
          <footer>
            © {new Date().getFullYear()} {site.name}
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getProject, projects, site } from '@/content/site';

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  return (
    <main className="project">
      <Link href="/#work" className="link">
        ← All work
      </Link>
      <p className="eyebrow">{p.year}</p>
      <h1>{p.title}</h1>
      <p className="lead">{p.summary}</p>
      <div
        className="cover big"
        style={{ background: `linear-gradient(135deg, ${p.cover[0]}, ${p.cover[1]})` }}
      >
        <span>{p.title}</span>
      </div>
      <div className="body">
        {p.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <p className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </p>
        <a className="btn" href={`mailto:${site.email}?subject=${encodeURIComponent(p.title)}`}>
          Ask me about it
        </a>
      </div>
    </main>
  );
}

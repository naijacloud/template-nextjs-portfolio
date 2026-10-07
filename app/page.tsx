import Link from 'next/link';

import { projects, site } from '@/content/site';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">{site.role}</p>
        <h1>{site.intro}</h1>
        <div className="actions">
          <a className="btn" href={`mailto:${site.email}`}>
            Get in touch
          </a>
          <a className="link" href="#work">
            See my work ↓
          </a>
        </div>
      </section>

      <section id="work" className="section">
        <h2>Selected work</h2>
        <div className="grid">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="card">
              <span
                className="cover"
                style={{ background: `linear-gradient(135deg, ${p.cover[0]}, ${p.cover[1]})` }}
              >
                <span>{p.title}</span>
              </span>
              <span className="meta">
                <strong>{p.title}</strong>
                <span className="year">{p.year}</span>
              </span>
              <span className="summary">{p.summary}</span>
              <span className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <h2>About</h2>
        <div>
          {site.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <p className="links">
            {site.links.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label} →
              </a>
            ))}
          </p>
        </div>
      </section>
    </main>
  );
}

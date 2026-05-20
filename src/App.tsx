import { siteContent, type Publication } from './content';

type SectionId = 'about' | 'news' | 'publications';

const sectionOrder: Array<{ id: SectionId; href: string }> = [
  { id: 'about', href: '/' },
  { id: 'news', href: '/news/' },
  { id: 'publications', href: '/publications/' },
];

const markdownToHtml = (source: string) => {
  const base = import.meta.env.BASE_URL;

  return source
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text: string, href: string) => {
      const normalizedHref = href.startsWith('assets/')
        ? `${base}${href}`.replace(/([^:]\/)\/+/g, '$1')
        : href;
      return `<a href="${normalizedHref}">${text}</a>`;
    })
    .replace(/_([^_]+)_/g, '<em>$1</em>');
};

const splitParagraphs = (source: string) =>
  source
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value));

const decodeLatexEscapes = (value: string) =>
  value
    .replace(/\{\\?([A-Za-z]+)\}/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const renderPublicationMeta = (publication: Publication) => {
  const venueParts = [publication.venue, publication.publisher, publication.year]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      {publication.author ? (
        <p className="publication-authors">{decodeLatexEscapes(publication.author)}</p>
      ) : null}
      {venueParts ? <p className="publication-venue">{decodeLatexEscapes(venueParts)}</p> : null}
    </>
  );
};

const normalizePathname = (pathname: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
  return normalized.endsWith('/') ? normalized : `${normalized}/`;
};

const getActiveSection = (): SectionId => {
  const pathname = normalizePathname(window.location.pathname);
  if (pathname === '/news/') {
    return 'news';
  }
  if (pathname === '/publications/') {
    return 'publications';
  }
  return 'about';
};

const App = () => {
  const activeSection = getActiveSection();

  const publications = [...siteContent.publications.items].sort((left, right) => {
    const leftYear = Number(left.year ?? '0');
    const rightYear = Number(right.year ?? '0');
    if (leftYear !== rightYear) {
      return rightYear - leftYear;
    }
    return left.title.localeCompare(right.title);
  });

  const publicationYears = publications.reduce<Array<{ year: string; items: Publication[] }>>(
    (groups, publication) => {
      const year = publication.year ?? 'Unknown';
      const existing = groups.find((group) => group.year === year);
      if (existing) {
        existing.items.push(publication);
      } else {
        groups.push({ year, items: [publication] });
      }
      return groups;
    },
    []
  );

  const homePublications = publications.slice(0, 5).reduce<
    Array<{ year: string; items: Publication[] }>
  >((groups, publication) => {
    const year = publication.year ?? 'Unknown';
    const existing = groups.find((group) => group.year === year);
    if (existing) {
      existing.items.push(publication);
    } else {
      groups.push({ year, items: [publication] });
    }
    return groups;
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="site-brand" href="/">
            <span className="site-brand-strong">Reese</span> Levine
          </a>
          <nav className="site-nav" aria-label="Primary">
            {sectionOrder.map((section) => (
              <a
                key={section.id}
                href={section.href}
                className={activeSection === section.id ? 'is-active' : undefined}
              >
                {section.id}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="content-shell">
        <section className="content-panel">
          {activeSection === 'about' ? (
            <div className="stack about-section">
              <div className="profile profile-float-right">
                <img src={siteContent.about.imagePath} alt="Reese Levine" />
                <div className="more-info">{siteContent.about.location}</div>
                <div className="profile-links">
                  <a href="https://github.com/reeselevine">github</a>
                  <a href="https://scholar.google.com/citations?user=JCm7dFcAAAAJ">scholar</a>
                  <a href={siteContent.cv.pdfPath}>cv</a>
                </div>
              </div>
              {splitParagraphs(siteContent.about.body).map((paragraph) => (
                <p
                  key={paragraph}
                  dangerouslySetInnerHTML={{ __html: markdownToHtml(paragraph) }}
                />
              ))}
              <div className="home-news">
                <div className="section-heading">
                  <h2>news</h2>
                </div>
                <div className="news-list home-news-list">
                  {siteContent.news.items.slice(0, 5).map((item) => (
                    <article key={item.slug} className="news-item">
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    <p dangerouslySetInnerHTML={{ __html: markdownToHtml(item.body) }} />
                  </article>
                ))}
                </div>
                <div className="more-link-row">
                  <a className="more-link" href="/news/">
                    See more
                  </a>
                </div>
              </div>
              <div className="home-publications">
                <div className="section-heading">
                  <h2>publications</h2>
                </div>
                {homePublications.map((group) => (
                  <section key={group.year} className="publication-year-group">
                    <h3>{group.year}</h3>
                    <div className="publication-list home-publication-list">
                      {group.items.map((publication) => (
                        <article key={publication.key} className="publication-card">
                          <h4>{decodeLatexEscapes(publication.title)}</h4>
                          {renderPublicationMeta(publication)}
                          {publication.note ? (
                            <p
                              className="publication-note"
                              dangerouslySetInnerHTML={{
                                __html: markdownToHtml(decodeLatexEscapes(publication.note)),
                              }}
                            />
                          ) : null}
                          <div className="publication-links">
                            {publication.pdf ? <a href={publication.pdf}>pdf</a> : null}
                            {publication.blog ? <a href={publication.blog}>blog</a> : null}
                            {publication.arxiv ? <a href={publication.arxiv}>arXiv</a> : null}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
                <div className="more-link-row">
                  <a className="more-link" href="/publications/">
                    See more
                  </a>
                </div>
              </div>
            </div>
          ) : null}

          {activeSection === 'news' ? (
            <div className="stack">
              <div className="section-heading">
                <h1>news</h1>
              </div>
              <div className="news-list">
                {siteContent.news.items.map((item) => (
                  <article key={item.slug} className="news-item">
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                    <p dangerouslySetInnerHTML={{ __html: markdownToHtml(item.body) }} />
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {activeSection === 'publications' ? (
            <div className="stack">
              <div className="section-heading">
                <h1>publications</h1>
              </div>
              {publicationYears.map((group) => (
                <section key={group.year} className="publication-year-group">
                  <h2>{group.year}</h2>
                  <div className="publication-list">
                    {group.items.map((publication) => (
                      <article key={publication.key} className="publication-card">
                        <h4>{decodeLatexEscapes(publication.title)}</h4>
                        {renderPublicationMeta(publication)}
                        {publication.note ? (
                          <p
                            className="publication-note"
                            dangerouslySetInnerHTML={{
                              __html: markdownToHtml(decodeLatexEscapes(publication.note)),
                            }}
                          />
                        ) : null}
                        <div className="publication-links">
                          {publication.pdf ? <a href={publication.pdf}>pdf</a> : null}
                          {publication.blog ? <a href={publication.blog}>blog</a> : null}
                          {publication.arxiv ? <a href={publication.arxiv}>arXiv</a> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : null}

        </section>
      </main>
      <footer className="site-footer">
        <p>
          "I felt the weight of unmapped worlds, unborn language." - William Finnegan,
          <em> Barbarian Days: A Surfing Life</em>
        </p>
      </footer>
    </div>
  );
};

export default App;

import { Helmet } from 'react-helmet-async';
import { SEO_DEFAULTS, SITE } from '@/constants/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  const pageTitle = title ? `${title} — ${SITE.name}` : SEO_DEFAULTS.title;
  const pageDescription = description ?? SEO_DEFAULTS.description;
  const url = `${SITE.url}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE.url}${SEO_DEFAULTS.ogImage}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${SITE.url}${SEO_DEFAULTS.ogImage}`} />
    </Helmet>
  );
}

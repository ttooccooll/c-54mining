import { SITE } from '../content/site';

// React 19 hoists <title>, <meta> and <link> into <head>, both in the browser
// and in the build-time prerender (scripts/prerender.js), so every route ships
// its own title, description, canonical URL and social preview in plain HTML.
const Seo = ({ title, description, path, image, type = 'website', jsonLd, noindex = false }) => {
  const url = `${SITE.url}${path === '/' ? '/' : path}`;
  const img = `${SITE.url}${image || SITE.ogImage}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
};

export default Seo;

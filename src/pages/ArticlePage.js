import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand } from '../components/Blocks';
import NotFoundPage from './NotFoundPage';
import articles from '../content/articles';
import { SITE } from '../content/site';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <NotFoundPage />;

  const path = `/learn/${article.slug}`;
  // seoTitle (optional) is for search results; the page heading keeps the document's own title.
  const searchTitle = article.seoTitle || article.title;
  const branded = `${searchTitle} | C-54 HomeTech`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: searchTitle,
    description: article.description,
    url: `${SITE.url}${path}`,
    mainEntityOfPage: `${SITE.url}${path}`,
    image: `${SITE.url}${SITE.ogImage}`,
    author: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
    publisher: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
  };

  return (
    <div className="page">
      <Seo
        title={branded.length > 65 ? searchTitle : branded}
        description={article.description}
        path={path}
        type="article"
        jsonLd={schema}
      />
      <article className="panel prose">
        <p className="eyebrow">
          <Link to="/learn">Learn</Link> · {article.kind}
        </p>
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
      </article>
      <CtaBand
        heading="Want this running in your home?"
        text="I set up mining heaters and private Home Assistant smart homes around Greater Cincinnati. One price, no subscription."
      />
    </div>
  );
};

export default ArticlePage;

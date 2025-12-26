import { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';

const CATALOG_KEY = 'fieldManualProductCatalog';
const CATALOG_URL =
  'https://drawliniment.com/collections/draw-it-out-best-sellers/products.json';

function stripHtml(value) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractSection(text, label) {
  const pattern = new RegExp(`${label}\\s*[:\\-]?\\s*([^\\n]+)`, 'i');
  const match = text.match(pattern);
  return match ? match[1].trim() : '';
}


export default function Products() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(CATALOG_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCatalog(parsed);
        }
      } catch {}
    }

    fetch(CATALOG_URL)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        const items = (data?.products || []).map(product => {
          const description = stripHtml(product.body_html || '');
          const helpsWith =
            extractSection(description, 'Helps with') ||
            extractSection(description, 'Benefits') ||
            'See product description for details.';
          const usage =
            extractSection(description, 'Usage') ||
            extractSection(description, 'Directions') ||
            'Follow label directions for use.';
          return {
            name: product.title,
            helpsWith,
            usage
          };
        });
        if (items.length > 0) {
          setCatalog(items);
          localStorage.setItem(CATALOG_KEY, JSON.stringify(items));
        }
      })
      .catch(() => {});
  }, []);

  const products = useMemo(() => catalog, [catalog]);

  return (
    <Layout>
      <h1>Draw It Out Best Sellers</h1>
      <p>
        Quick guidance on what each Draw It Out product helps with and how to
        use it during daily care.
      </p>
      <p>
        View the full catalog at{' '}
        <a
          href="https://drawliniment.com/collections/draw-it-out-best-sellers"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 12px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#f1e6d9',
            color: '#2a241d',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          drawliniment.com ↗
        </a>
        .
      </p>

      <ArticleCard
        title="How to Use This Guide"
        eyebrow="In-depth article"
        href="/articles#how-to-use-the-products-guide"
      >
        <p>
          Use these notes as a fast refresher before treatment or after a hard
          ride. Always follow label directions for exact timing and precautions.
        </p>
      </ArticleCard>

      <section style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
        {products.length === 0 ? (
          <section
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #e6d9c8',
              background: '#fffaf4'
            }}
          >
            <h3 style={{ marginTop: 0 }}>Sync the catalog</h3>
            <p style={{ margin: 0 }}>
              Connect to load the latest best-sellers list. Once synced, it
              stays available offline.
            </p>
          </section>
        ) : (
          products.map(product => (
            <section
              key={product.name}
              style={{
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #e6d9c8',
                background: '#fffaf4'
              }}
            >
              <h3 style={{ marginTop: 0 }}>{product.name}</h3>
              <p style={{ marginBottom: '6px' }}>
                <strong>Helps with:</strong> {product.helpsWith}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Usage:</strong> {product.usage}
              </p>
            </section>
          ))
        )}
      </section>
    </Layout>
  );
}

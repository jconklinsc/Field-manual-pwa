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

const FALLBACK_PRODUCTS = [
  {
    name: 'Draw It Out Liniment',
    helpsWith:
      'Cooling support for tired muscles, mild swelling, and post-work recovery.',
    usage:
      'Apply after work or turnout. Massage into legs and shoulders as needed.'
  },
  {
    name: 'Draw It Out Poultice',
    helpsWith:
      'Draws heat and supports recovery after hard work or minor strains.',
    usage:
      'Apply a thick layer to legs after exercise, wrap if desired, and rinse off later.'
  },
  {
    name: 'Draw It Out Hoof Soak',
    helpsWith:
      'Supports hoof comfort by drawing out soreness and easing tenderness.',
    usage:
      'Soak clean hooves for the recommended time, then dry and monitor.'
  },
  {
    name: 'Draw It Out Hoof Clay',
    helpsWith:
      'Targets hoof heat and tenderness with a cooling draw.',
    usage:
      'Pack into the hoof and frog area after cleaning. Reapply as needed.'
  },
  {
    name: 'Draw It Out Thrush & Wound Treatment',
    helpsWith:
      'Supports minor wound care and thrush management.',
    usage:
      'Clean the area, apply directly, and repeat per label guidance.'
  },
  {
    name: 'Draw It Out Shampoo',
    helpsWith:
      'Gentle cleansing after work, trail rides, or treatment applications.',
    usage: 'Lather, let sit briefly, then rinse thoroughly.'
  }
];

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

  const products = useMemo(() => {
    return catalog.length > 0 ? catalog : FALLBACK_PRODUCTS;
  }, [catalog]);

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
          drawliniment.com
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
        {products.map(product => (
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
        ))}
      </section>
    </Layout>
  );
}

import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';

const PRODUCTS = [
  {
    name: 'Draw It Out Liniment',
    helpsWith: 'Cooling relief for tired muscles, minor swelling, and post-work recovery.',
    usage: 'Apply after work or turnout. Massage into legs and shoulders as needed.'
  },
  {
    name: 'Draw It Out Poultice',
    helpsWith: 'Pulls heat and supports recovery after hard work or minor strains.',
    usage: 'Apply a thick layer to legs after exercise, wrap if desired, and rinse off later.'
  },
  {
    name: 'Draw It Out Hoof Soak',
    helpsWith: 'Supports hoof health by drawing out soreness and easing foot tenderness.',
    usage: 'Soak clean hooves for the recommended time, then dry and monitor.'
  },
  {
    name: 'Draw It Out Hoof Clay',
    helpsWith: 'Targets hoof heat and tenderness with a cooling draw.',
    usage: 'Pack into the hoof and frog area after cleaning. Reapply as needed.'
  },
  {
    name: 'Draw It Out Thrush & Wound Treatment',
    helpsWith: 'Supports minor wound care and thrush management.',
    usage: 'Clean the area, apply directly, and repeat per label guidance.'
  },
  {
    name: 'Draw It Out Shampoo',
    helpsWith: 'Gentle cleansing after work, trail rides, or treatment applications.',
    usage: 'Lather, let sit briefly, then rinse thoroughly.'
  }
];

export default function Products() {
  return (
    <Layout>
      <h1>Draw It Out Best Sellers</h1>
      <p>
        Quick guidance on what each Draw It Out product helps with and how to
        use it during daily care.
      </p>

      <ArticleCard title="How to Use This Guide" eyebrow="In-depth article">
        <p>
          Use these notes as a fast refresher before treatment or after a hard
          ride. Always follow label directions for exact timing and precautions.
        </p>
      </ArticleCard>

      <section style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
        {PRODUCTS.map(product => (
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

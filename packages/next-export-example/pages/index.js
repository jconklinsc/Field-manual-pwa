import Layout from '../components/Layout';
import Search from '../components/Search';
import searchData from '../data/searchData';

export default function Home() {
  return (
    <Layout>
      <h1>Draw It Out Field Manual</h1>
      <p>
        Calm, in-depth care notes for your horses. Use these articles to spot
        small changes, document patterns, and stay grounded in every decision.
      </p>

      {/* Global Search */}
      <Search data={searchData} />

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '24px',
          display: 'grid',
          gap: '12px'
        }}
      >
        <li>
          <a
            href="/daily-care"
            style={{
              display: 'block',
              padding: '14px 16px',
              borderRadius: '16px',
              border: '1px solid #e6d9c8',
              background: '#fffaf4',
              boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
              fontWeight: 600,
              color: '#2a241d'
            }}
          >
            Daily Care
          </a>
        </li>
        <li>
          <a href="/pre-ride" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Pre-Ride Prep
          </a>
        </li>
        <li>
          <a href="/post-ride" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Post-Ride Recovery
          </a>
        </li>
        <li>
          <a href="/skin-and-legs" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Skin & Legs
          </a>
        </li>
        <li>
          <a href="/environment" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Environment & Stress
          </a>
        </li>
        <li>
          <a href="/quick-reference" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Quick Reference
          </a>
        </li>
        <li>
          <a href="/horse-health-terms" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Horse Health Terms Library
          </a>
        </li>
        <li>
          <a href="/appointments" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Vet & Farrier Appointments
          </a>
        </li>
        <li>
          <a href="/products" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Draw It Out Best Sellers
          </a>
        </li>
        <li>
          <a href="/articles" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            In-Depth Articles
          </a>
        </li>

        <hr style={{ margin: '16px 0' }} />

        <li>
          <a href="/horses" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Horse Logs
          </a>
        </li>
        <li>
          <a href="/notes" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Notes
          </a>
        </li>
        <li>
          <a href="/favorites" style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4',
            boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
            fontWeight: 600,
            color: '#2a241d'
          }}>
            Favorites <span style={{ color: '#78be20' }}>★</span>
          </a>
        </li>
      </ul>
    </Layout>
  );
}

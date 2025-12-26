import Layout from '../components/Layout';
import Search from '../components/Search';
import searchData from '../data/searchData';

export default function Home() {
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 18px',
    borderRadius: '16px',
    border: '1px solid #e6d9c8',
    background: '#fffaf4',
    boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)',
    fontWeight: 600,
    color: '#2a241d',
    minHeight: '56px'
  };

  return (
    <Layout>
      <h1>Field Manual</h1>
      <p>
        Calm, in-depth care notes for Rory and Nudge. Use these articles to
        spot small changes, document patterns, and stay grounded in every
        decision.
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
          <a href="/daily-care" style={cardStyle}>
            Daily Care
          </a>
        </li>
        <li>
          <a href="/pre-ride" style={cardStyle}>
            Pre-Ride Prep
          </a>
        </li>
        <li>
          <a href="/post-ride" style={cardStyle}>
            Post-Ride Recovery
          </a>
        </li>
        <li>
          <a href="/skin-and-legs" style={cardStyle}>
            Skin & Legs
          </a>
        </li>
        <li>
          <a href="/environment" style={cardStyle}>
            Environment & Stress
          </a>
        </li>
        <li>
          <a href="/quick-reference" style={cardStyle}>
            Quick Reference
          </a>
        </li>
        <li>
          <a href="/horse-health-terms" style={cardStyle}>
            Horse Health Terms Library
          </a>
        </li>
        <li>
          <a href="/appointments" style={cardStyle}>
            Vet & Farrier Appointments
          </a>
        </li>
        <li>
          <a href="/products" style={cardStyle}>
            Draw It Out Best Sellers
          </a>
        </li>
        <li>
          <a href="/articles" style={cardStyle}>
            In-Depth Articles
          </a>
        </li>
        <li>
          <a href="/horse-health-terms">Horse Health Terms Library</a>
        </li>

        <hr style={{ margin: '16px 0' }} />

        <li>
          <a href="/horses" style={cardStyle}>
            Horse Logs
          </a>
        </li>
        <li>
          <a href="/notes" style={cardStyle}>
            Notes
          </a>
        </li>
        <li>
          <a href="/favorites">
            Favorites <span style={{ color: '#78be20' }}>★</span>
          </a>
        </li>
      </ul>
    </Layout>
  );
}

import Layout from '../components/Layout';
import Search from '../components/Search';
import searchData from '../data/searchData';

export default function Home() {
  return (
    <Layout>
      <h1>Field Manual</h1>
      <p>Practical care. Clear decisions.</p>

      {/* Global Search */}
      <Search data={searchData} />

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '24px',
          fontSize: '18px',
          lineHeight: '1.8'
        }}
      >
        <li>
          <a href="/daily-care">Daily Care</a>
        </li>
        <li>
          <a href="/pre-ride">Pre-Ride Prep</a>
        </li>
        <li>
          <a href="/post-ride">Post-Ride Recovery</a>
        </li>
        <li>
          <a href="/skin-and-legs">Skin & Legs</a>
        </li>
        <li>
          <a href="/environment">Environment & Stress</a>
        </li>
        <li>
          <a href="/quick-reference">Quick Reference</a>
        </li>

        <hr style={{ margin: '16px 0' }} />

        <li>
          <a href="/horses">Horse Logs</a>
        </li>
        <li>
          <a href="/notes">Notes</a>
        </li>
        <li>
          <a href="/favorites">Favorites ⭐</a>
        </li>
      </ul>
    </Layout>
  );
}

import Layout from '../components/Layout';
import Search from '../components/Search';
import searchData from '../data/searchData';

export default function Home() {
  return (
    <Layout>

      {/* Global Search */}
      <Search data={searchData} />

      <h1>Field Manual</h1>
      <p>Practical care. Clear decisions.</p>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '24px',
          fontSize: '18px',
          lineHeight: '1.8'
        }}
      >
        <li><a href="/daily-care" style={{ textDecoration: 'underline' }}>Daily Care</a></li>
        <li><a href="/pre-ride" style={{ textDecoration: 'underline' }}>Pre-Ride Prep</a></li>
        <li><a href="/post-ride" style={{ textDecoration: 'underline' }}>Post-Ride Recovery</a></li>
        <li><a href="/skin-and-legs" style={{ textDecoration: 'underline' }}>Skin & Legs</a></li>
        <li><a href="/environment" style={{ textDecoration: 'underline' }}>Environment & Stress</a></li>
        <li><a href="/quick-reference" style={{ textDecoration: 'underline' }}>Quick Reference</a></li>
      </ul>

    </Layout>
  );
}

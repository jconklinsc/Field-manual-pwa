import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Field Manual</h1>
      <p>Practical care. Clear decisions.</p>

      <ul>
        <li><a href="/daily-care">Daily Care</a></li>
        <li><a href="/pre-ride">Pre-Ride Prep</a></li>
        <li><a href="/post-ride">Post-Ride Recovery</a></li>
        <li><a href="/skin-and-legs">Skin & Legs</a></li>
        <li><a href="/environment">Environment & Stress</a></li>
        <li><a href="/quick-reference">Quick Reference</a></li>
      </ul>
    </Layout>
  );
}

import Layout from '../components/Layout';
import Search from '../components/Search';
import searchData from '../data/searchData';
import { styles } from '../components/styles';

export default function Home() {
  return (
    <Layout>
      <Search data={searchData} />

      <h1 style={styles.h1}>Field Manual</h1>
      <p style={styles.paragraph}>Practical care. Clear decisions.</p>

      <ul style={styles.list}>
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

import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';

export default function QuickReference() {
  return (
    <Layout>
      <h1>
        Quick Reference
        <FavoriteToggle id="quick-reference" label="Quick Reference" />
      </h1>

      <p>
        Fast answers for in-the-moment decisions at the barn or show.
      </p>
    </Layout>
  );
}

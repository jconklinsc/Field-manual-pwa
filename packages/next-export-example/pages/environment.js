import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';

export default function Environment() {
  return (
    <Layout>
      <h1>
        Environment & Stress
        <FavoriteToggle id="environment" label="Environment & Stress" />
      </h1>

      <p>
        Weather, footing, hauling, routine changes, and environmental stressors.
      </p>
    </Layout>
  );
}

import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';

export default function DailyCare() {
  return (
    <Layout>
      <h1>
        Daily Care
        <FavoriteToggle id="daily-care" label="Daily Care" />
      </h1>

      <p>
        Everyday observation, light maintenance, and knowing what “normal” looks like.
      </p>
    </Layout>
  );
}

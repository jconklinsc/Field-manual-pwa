import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';

export default function PreRide() {
  return (
    <Layout>
      <h1>
        Pre-Ride Prep
        <FavoriteToggle id="pre-ride" label="Pre-Ride Prep" />
      </h1>

      <p>
        Preparing the horse’s body, mind, and equipment before work.
      </p>
    </Layout>
  );
}

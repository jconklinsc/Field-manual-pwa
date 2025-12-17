import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';

export default function PostRide() {
  return (
    <Layout>
      <h1>
        Post-Ride Recovery
        <FavoriteToggle id="post-ride" label="Post-Ride Recovery" />
      </h1>

      <p>
        Cool-down routines, soreness checks, and recovery steps.
      </p>
    </Layout>
  );
}

import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function PostRide() {
  return (
    <Layout>
      <h1>
        Post-Ride Recovery
        <FavoriteToggle id="post-ride" label="Post-Ride Recovery" />
      </h1>

      <p>Cooldown routines and post-work recovery.</p>

      <SmartPrompt section="Post-Ride Recovery" />

      <SectionLogQuickAdd section="Post-Ride Recovery" />
    </Layout>
  );
}

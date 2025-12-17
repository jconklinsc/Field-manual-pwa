import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SectionReminder from '../components/SectionReminder';
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

      <SectionReminder section="Post-Ride Recovery" days={3} />
      <SmartPrompt section="Post-Ride Recovery" />
      <SectionLogQuickAdd section="Post-Ride Recovery" />
    </Layout>
  );
}

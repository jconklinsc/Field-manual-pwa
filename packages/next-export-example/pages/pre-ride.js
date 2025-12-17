import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function PreRide() {
  return (
    <Layout>
      <h1>
        Pre-Ride Prep
        <FavoriteToggle id="pre-ride" label="Pre-Ride Prep" />
      </h1>

      <p>Prepare body, mind, and equipment.</p>

      <SectionReminder section="Pre-Ride Prep" days={3} />
      <SmartPrompt section="Pre-Ride Prep" />
      <SectionLogQuickAdd section="Pre-Ride Prep" />
    </Layout>
  );
}

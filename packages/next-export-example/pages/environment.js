import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function Environment() {
  return (
    <Layout>
      <h1>
        Environment & Stress
        <FavoriteToggle id="environment" label="Environment & Stress" />
      </h1>

      <p>Weather, footing, hauling, and routine changes.</p>

      <SectionReminder section="Environment & Stress" days={7} />
      <SmartPrompt section="Environment & Stress" />
      <SectionLogQuickAdd section="Environment & Stress" />
    </Layout>
  );
}

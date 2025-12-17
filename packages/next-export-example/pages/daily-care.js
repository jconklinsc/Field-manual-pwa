import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function DailyCare() {
  return (
    <Layout>
      <h1>
        Daily Care
        <FavoriteToggle id="daily-care" label="Daily Care" />
      </h1>

      <p>Everyday observation and baseline checks.</p>

      <SmartPrompt section="Daily Care" />

      <SectionLogQuickAdd section="Daily Care" />
    </Layout>
  );
}

import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SectionReminder from '../components/SectionReminder';
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

      <SectionReminder section="Daily Care" days={2} />
      <SmartPrompt section="Daily Care" />
      <SectionLogQuickAdd section="Daily Care" />
    </Layout>
  );
}

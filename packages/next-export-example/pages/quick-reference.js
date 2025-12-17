import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function QuickReference() {
  return (
    <Layout>
      <h1>
        Quick Reference
        <FavoriteToggle id="quick-reference" label="Quick Reference" />
      </h1>

      <p>Fast answers for in-the-moment decisions.</p>

      <SectionReminder section="Quick Reference" days={7} />
      <SmartPrompt section="Quick Reference" />
      <SectionLogQuickAdd section="Quick Reference" />
    </Layout>
  );
}

import Layout from '../components/Layout';
import NotesDashboard from '../components/NotesDashboard';
import ArticleCard from '../components/ArticleCard';

export default function Notes() {
  return (
    <Layout>
      <h1>Notes</h1>
      <p>
        Keep Rory and Nudge’s daily notes in one calm space. The more detail you
        capture, the faster you can spot trends.
      </p>
      <ArticleCard title="Field Notes That Matter" eyebrow="In-depth article">
        <p>
          Add short, specific observations: “Nudge left hind warm after turnout”
          or “Rory stretched down longer than usual.” Pair notes with dates so
          you can track how changes respond to rest, work, or weather.
        </p>
      </ArticleCard>
      <NotesDashboard />
    </Layout>
  );
}

import Layout from '../components/Layout';
import NotesDashboard from '../components/NotesDashboard';
import ArticleCard from '../components/ArticleCard';

export default function Notes() {
  return (
    <Layout>
      <h1>Notes</h1>
      <p>
        Keep daily notes in one calm space. The more detail you capture, the
        faster you can spot trends.
      </p>
      <ArticleCard
        title="Field Notes That Matter"
        eyebrow="In-depth article"
        href="/articles#field-notes-that-matter"
      >
        <p>
          Add short, specific observations, then pair them with dates so you
          can track how changes respond to rest, work, or weather.
        </p>
      </ArticleCard>
      <div style={{ marginTop: '18px', marginBottom: '8px' }}>
        <a
          href="#notes-input"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#f1e6d9',
            color: '#2a241d',
            fontWeight: 600,
            minHeight: '44px',
            textDecoration: 'none'
          }}
        >
          Add Note Entry
        </a>
      </div>
      <NotesDashboard />
    </Layout>
  );
}

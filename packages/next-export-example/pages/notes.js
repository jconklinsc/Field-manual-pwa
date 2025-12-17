import Layout from '../components/Layout';
import NotesDashboard from '../components/NotesDashboard';

export default function NotesPage() {
  return (
    <Layout>
      <h1>Notes</h1>
      <p style={{ color: '#555' }}>
        Quick notes. Observations. Reminders.
      </p>

      <NotesDashboard />
    </Layout>
  );
}

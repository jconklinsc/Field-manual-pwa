import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import NotesPanel from '../components/NotesPanel';
import { styles } from '../components/styles';

export default function DailyCare() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'observation', label: 'Daily Observation Checklist' },
          { id: 'hands-on', label: 'Hands-On Assessment' },
          { id: 'movement', label: 'Movement Snapshot' },
          { id: 'hydration', label: 'Hydration & Feed Check' },
          { id: 'off', label: 'When Something Feels Off' }
        ]}
      />

      <h1 style={styles.h1}>Daily Care</h1>
      <p style={styles.paragraph}>
        Daily care is about knowing what “normal” looks like for your horse and noticing
        changes early.
      </p>

      <h2 id="observation" style={styles.h2}>Daily Observation Checklist</h2>
      <ul style={styles.list}>
        <li>Eyes clear and alert</li>
        <li>No swelling or heat in legs</li>
        <li>Normal appetite and manure</li>
      </ul>

      <h2 id="hands-on" style={styles.h2}>Hands-On Assessment</h2>
      <ul style={styles.list}>
        <li>Check neck, back, shoulders, hindquarters</li>
        <li>Note any guarding or sensitivity</li>
      </ul>

      <h2 id="movement" style={styles.h2}>Movement Snapshot</h2>
      <ul style={styles.list}>
        <li>Even stride</li>
        <li>No head bob</li>
        <li>Willing to move forward</li>
      </ul>

      <h2 id="hydration" style={styles.h2}>Hydration & Feed</h2>
      <ul style={styles.list}>
        <li>Water intake looks normal</li>
        <li>Salt available</li>
      </ul>

      <h2 id="off" style={styles.h2}>When Something Feels Off</h2>
      <p style={styles.paragraph}>
        Pause. Observe again. Compare to baseline. Don’t push through uncertainty.
      </p>

      <NotesPanel id="daily-care" title="Daily Care" />

      <SectionNav
        prev={null}
        next={{ href: '/pre-ride', label: 'Pre-Ride Prep' }}
      />
    </Layout>
  );
}

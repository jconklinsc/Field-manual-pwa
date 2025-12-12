import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
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
        The foundation of soundness is knowing what “normal” looks like for your horse.
        Daily care is less about doing more — and more about observing wisely.
      </p>

      <h2 id="observation" style={styles.h2}>Daily Observation Checklist</h2>
      <ul style={styles.list}>
        <li>Eyes clear and bright</li>
        <li>Nostrils clean, normal airflow</li>
        <li>No swelling or heat in legs</li>
        <li>Normal manure consistency</li>
        <li>Even weight-bearing on all four feet</li>
        <li>Alert but calm demeanor</li>
      </ul>

      <h2 id="hands-on" style={styles.h2}>Quick Hands-On Assessment</h2>
      <ul style={styles.list}>
        <li>Check for new bumps, cuts, swelling, or sensitivity</li>
        <li>Feel for muscle tightness in the neck, shoulders, back, and hindquarters</li>
        <li>Light palpation along spine — should show no dramatic reactions</li>
      </ul>

      <h2 id="movement" style={styles.h2}>Movement Snapshot</h2>
      <ul style={styles.list}>
        <li>Even rhythm</li>
        <li>No short steps or toe-dragging</li>
        <li>No reluctance to move forward</li>
        <li>Head level, no bobbing</li>
      </ul>

      <h2 id="hydration" style={styles.h2}>Hydration & Feed Check</h2>
      <ul style={styles.list}>
        <li>Water bucket decreased as expected</li>
        <li>Salt available</li>
        <li>Normal appetite</li>
        <li>Skin pinch test: returns in under 1 second</li>
      </ul>

      <h2 id="off" style={styles.h2}>When Something Feels Off</h2>
      <p style={styles.paragraph}>
        If something feels “not quite right,” trust that signal.
        Pause. Observe again. Compare to baseline.
      </p>

      <SectionNav
        prev={null}
        next={{ href: '/pre-ride', label: 'Pre-Ride Prep' }}
      />
    </Layout>
  );
}

import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import { styles } from '../components/styles';

export default function PostRide() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'cooldown', label: 'Cool-Down Sequence' },
          { id: 'movement', label: 'Movement Check' },
          { id: 'heat-scan', label: 'Heat & Swelling Scan' },
          { id: 'back-body', label: 'Back & Body Assessment' },
          { id: 'hydration', label: 'Hydration & Cooling' },
          { id: 'recovery', label: 'Restorative Measures' },
          { id: 'next-day', label: 'Next-Day Check' }
        ]}
      />

      <h1 style={styles.h1}>Post-Ride Recovery</h1>
      <p style={styles.paragraph}>
        Recovery begins the moment the ride ends. What you do in the first few minutes after
        dismounting affects tomorrow’s soundness.
      </p>

      <h2 id="cooldown" style={styles.h2}>Cool-Down Sequence</h2>
      <ul style={styles.list}>
        <li>5–10 minutes walking</li>
        <li>Encourage stretching</li>
        <li>Let breathing normalize gradually</li>
      </ul>

      <h2 id="movement" style={styles.h2}>Movement Check</h2>
      <ul style={styles.list}>
        <li>Even weight-bearing</li>
        <li>No toe-dragging</li>
        <li>No shortened stride</li>
      </ul>

      <h2 id="heat-scan" style={styles.h2}>Heat & Swelling Scan</h2>
      <ul style={styles.list}>
        <li>Tendons cool and tight</li>
        <li>Check joints for heat</li>
        <li>Check fetlocks for puffiness</li>
      </ul>

      <h2 id="back-body" style={styles.h2}>Back & Body Assessment</h2>
      <ul style={styles.list}>
        <li>Shoulders, back, and loin should feel relaxed</li>
        <li>No sharp reactions during palpation</li>
      </ul>

      <h2 id="hydration" style={styles.h2}>Hydration & Cooling</h2>
      <ul style={styles.list}>
        <li>Offer water immediately</li>
        <li>Scrape excess water after hosing to prevent overheating</li>
      </ul>

      <h2 id="recovery" style={styles.h2}>Restorative Measures</h2>
      <ul style={styles.list}>
        <li>Light hand-walking if stiffness appears</li>
        <li>Support circulation with cool-down routines</li>
      </ul>

      <h2 id="next-day" style={styles.h2}>Next-Day Check</h2>
      <ul style={styles.list}>
        <li>No new swelling</li>
        <li>No heat in joints or tendons</li>
        <li>Horse steps forward willingly</li>
      </ul>

      <SectionNav
        prev={{ href: '/pre-ride', label: 'Pre-Ride Prep' }}
        next={{ href: '/skin-and-legs', label: 'Skin & Legs' }}
      />
    </Layout>
  );
}

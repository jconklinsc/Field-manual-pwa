import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import NotesPanel from '../components/NotesPanel';
import { styles } from '../components/styles';

export default function PreRide() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'mental', label: 'Mental Check-In' },
          { id: 'body', label: 'Body Scan' },
          { id: 'limbs', label: 'Limb & Joint Check' },
          { id: 'warmup', label: 'Warm-Up' }
        ]}
      />

      <h1 style={styles.h1}>Pre-Ride Prep</h1>
      <p style={styles.paragraph}>
        Good preparation reduces risk and improves performance.
      </p>

      <h2 id="mental" style={styles.h2}>Mental Check-In</h2>
      <ul style={styles.list}>
        <li>Calm but alert</li>
        <li>No unusual resistance</li>
      </ul>

      <h2 id="body" style={styles.h2}>Body Scan</h2>
      <ul style={styles.list}>
        <li>Neck, back, shoulders</li>
        <li>No sharp reactions</li>
      </ul>

      <h2 id="limbs" style={styles.h2}>Limb & Joint Check</h2>
      <ul style={styles.list}>
        <li>No heat or swelling</li>
        <li>Check hooves</li>
      </ul>

      <h2 id="warmup" style={styles.h2}>Warm-Up</h2>
      <ul style={styles.list}>
        <li>5–10 min walk</li>
        <li>Large circles</li>
      </ul>

      <NotesPanel id="pre-ride" title="Pre-Ride Prep" />

      <SectionNav
        prev={{ href: '/daily-care', label: 'Daily Care' }}
        next={{ href: '/post-ride', label: 'Post-Ride Recovery' }}
      />
    </Layout>
  );
}

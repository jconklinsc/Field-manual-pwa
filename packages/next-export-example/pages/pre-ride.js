import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import { styles } from '../components/styles';

export default function PreRide() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'mental', label: 'Mental Check-In' },
          { id: 'hands-on', label: 'Hands-On Body Scan' },
          { id: 'limbs', label: 'Limb & Joint Assessment' },
          { id: 'warmup', label: 'Warm-Up Sequence' },
          { id: 'equipment', label: 'Equipment Integrity Check' },
          { id: 'go-no-go', label: 'Go / No-Go Assessment' },
        ]}
      />

      <h1 style={styles.h1}>Pre-Ride Prep</h1>
      <p style={styles.paragraph}>
        Preparing a horse for work is about reducing risk, protecting joints and soft tissue,
        and setting the horse’s mind and body up for a productive session.
      </p>

      <h2 id="mental" style={styles.h2}>Mental Check-In</h2>
      <ul style={styles.list}>
        <li>Alert but not anxious</li>
        <li>No unusual stiffness or resistance</li>
        <li>Normal tracking from stall to grooming area</li>
      </ul>

      <h2 id="hands-on" style={styles.h2}>Hands-On Body Scan</h2>
      <ul style={styles.list}>
        <li>Check neck, poll, shoulders, back, loin, hindquarters</li>
        <li>Note twitching, guarding, warm spots</li>
      </ul>

      <h2 id="limbs" style={styles.h2}>Limb & Joint Assessment</h2>
      <ul style={styles.list}>
        <li>Check for heat or swelling</li>
        <li>Flex/extend each limb gently</li>
        <li>Check hooves for stones or tenderness</li>
      </ul>

      <h2 id="warmup" style={styles.h2}>Warm-Up Sequence</h2>
      <ul style={styles.list}>
        <li>5 minutes active walk</li>
        <li>Large circles</li>
        <li>Straight lines</li>
        <li>Light trot once relaxed</li>
      </ul>

      <h2 id="equipment" style={styles.h2}>Equipment Integrity Check</h2>
      <ul style={styles.list}>
        <li>Girth free of cracks</li>
        <li>Stirrups level</li>
        <li>Bit fitted properly</li>
        <li>Pad clean and evenly positioned</li>
      </ul>

      <h2 id="go-no-go" style={styles.h2}>Go / No-Go</h2>
      <p style={styles.paragraph}>
        A 5-minute reassessment prevents 5 weeks off.
      </p>

      <SectionNav
        prev={{ href: '/daily-care', label: 'Daily Care' }}
        next={{ href: '/post-ride', label: 'Post-Ride Recovery' }}
      />
    </Layout>
  );
}

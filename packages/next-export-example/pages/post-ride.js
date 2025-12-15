import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import NotesPanel from '../components/NotesPanel';
import { styles } from '../components/styles';

export default function PostRide() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'cooldown', label: 'Cool Down' },
          { id: 'check', label: 'Post-Ride Check' }
        ]}
      />

      <h1 style={styles.h1}>Post-Ride Recovery</h1>

      <h2 id="cooldown" style={styles.h2}>Cool Down</h2>
      <ul style={styles.list}>
        <li>Walk until breathing normal</li>
        <li>Allow stretching</li>
      </ul>

      <h2 id="check" style={styles.h2}>Post-Ride Check</h2>
      <ul style={styles.list}>
        <li>Check legs for heat</li>
        <li>Observe movement</li>
      </ul>

      <NotesPanel id="post-ride" title="Post-Ride Recovery" />

      <SectionNav
        prev={{ href: '/pre-ride', label: 'Pre-Ride Prep' }}
        next={{ href: '/skin-and-legs', label: 'Skin & Legs' }}
      />
    </Layout>
  );
}

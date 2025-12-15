import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import NotesPanel from '../components/NotesPanel';
import { styles } from '../components/styles';

export default function SkinAndLegs() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'inspection', label: 'Inspection' },
          { id: 'heat', label: 'Heat & Swelling' }
        ]}
      />

      <h1 style={styles.h1}>Skin & Legs</h1>

      <h2 id="inspection" style={styles.h2}>Inspection</h2>
      <ul style={styles.list}>
        <li>Look for cuts or irritation</li>
        <li>Check tendons</li>
      </ul>

      <h2 id="heat" style={styles.h2}>Heat & Swelling</h2>
      <ul style={styles.list}>
        <li>Compare both legs</li>
        <li>Note changes</li>
      </ul>

      <NotesPanel id="skin-and-legs" title="Skin & Legs" />

      <SectionNav
        prev={{ href: '/post-ride', label: 'Post-Ride Recovery' }}
        next={{ href: '/environment', label: 'Environment & Stress' }}
      />
    </Layout>
  );
}

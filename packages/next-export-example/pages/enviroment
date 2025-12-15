import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import NotesPanel from '../components/NotesPanel';
import { styles } from '../components/styles';

export default function Environment() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'weather', label: 'Weather' },
          { id: 'footing', label: 'Footing' }
        ]}
      />

      <h1 style={styles.h1}>Environment & Stress</h1>

      <h2 id="weather" style={styles.h2}>Weather</h2>
      <ul style={styles.list}>
        <li>Heat affects hydration</li>
        <li>Cold increases stiffness</li>
      </ul>

      <h2 id="footing" style={styles.h2}>Footing</h2>
      <ul style={styles.list}>
        <li>Hard ground increases concussion</li>
        <li>Deep footing strains tendons</li>
      </ul>

      <NotesPanel id="environment" title="Environment & Stress" />

      <SectionNav
        prev={{ href: '/skin-and-legs', label: 'Skin & Legs' }}
        next={{ href: '/quick-reference', label: 'Quick Reference' }}
      />
    </Layout>
  );
}

import Layout from '../components/Layout';
import Nav from '../components/Nav';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import NotesPanel from '../components/NotesPanel';
import { styles } from '../components/styles';

export default function Environment() {
  return (
    <Layout>
      {/* Top Navigation */}
      <Nav />

      {/* Section Navigation */}
      <SectionNav
        items={[
          { id: 'weather', label: 'Weather' },
          { id: 'footing', label: 'Footing' },
          { id: 'stress', label: 'Stress Factors' }
        ]}
      />

      {/* Table of Contents */}
      <TOC
        items={[
          { id: 'weather', label: 'Weather' },
          { id: 'footing', label: 'Footing' },
          { id: 'stress', label: 'Stress Factors' }
        ]}
      />

      {/* Page Content */}
      <h1 style={styles.h1}>Environment & Stress</h1>

      <section id="weather">
        <h2 style={styles.h2}>Weather</h2>
        <ul style={styles.list}>
          <li>Heat increases dehydration risk</li>
          <li>Cold can increase stiffness and warm-up time</li>
          <li>Humidity affects respiratory efficiency</li>
        </ul>
      </section>

      <section id="footing">
        <h2 style={styles.h2}>Footing</h2>
        <ul style={styles.list}>
          <li>Hard ground increases concussion load</li>
          <li>Deep footing strains tendons and ligaments</li>
          <li>Inconsistent footing increases misstep risk</li>
        </ul>
      </section>

      <section id="stress">
        <h2 style={styles.h2}>Stress Factors</h2>
        <ul style={styles.list}>
          <li>Hauling fatigue affects coordination</li>
          <li>Schedule changes elevate cortisol levels</li>
          <li>Environmental noise can increase tension</li>
        </ul>
      </section>

      {/* Notes */}
      <NotesPanel
        id="environment"
        title="Environment & Stress Notes"
      />
    </Layout>
  );
}

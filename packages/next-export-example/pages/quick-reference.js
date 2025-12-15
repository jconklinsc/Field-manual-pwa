import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import NotesPanel from '../components/NotesPanel';
import { styles } from '../components/styles';

export default function QuickReference() {
  return (
    <Layout>
      <Nav />

      <h1 style={styles.h1}>Quick Reference</h1>

      <ul style={styles.list}>
        <li>Heat → stop and reassess</li>
        <li>Swelling → cool and monitor</li>
        <li>Behavior change → check body first</li>
      </ul>

      <NotesPanel id="quick-reference" title="Quick Reference" />

      <SectionNav
        prev={{ href: '/environment', label: 'Environment & Stress' }}
        next={null}
      />
    </Layout>
  );
}

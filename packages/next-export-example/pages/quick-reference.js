import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import { styles } from '../components/styles';

export default function QuickReference() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'leg-heat', label: 'Heat or Swelling in a Leg' },
          { id: 'off-under-saddle', label: 'Horse Feels “Off” Under Saddle' },
          { id: 'stiffness', label: 'Tight or Stiff Muscles' },
          { id: 'skin-irritation', label: 'Minor Skin Irritation' },
          { id: 'not-drinking', label: 'Horse Not Drinking' },
          { id: 'behavior-change', label: 'Sudden Behavioral Change' },
          { id: 'hauling', label: 'Hauling Checklist' },
          { id: 'stop-reassess', label: 'When to Stop & Reassess' }
        ]}
      />

      <h1 style={styles.h1}>Quick Reference</h1>
      <p style={styles.paragraph}>
        Fast answers for common decisions in the barn, trailer, or at the show. Designed to
        help you act confidently in the moment.
      </p>

      <h2 id="leg-heat" style={styles.h2}>Heat or Swelling in a Leg</h2>
      <ul style={styles.list}>
        <li>Cold hose 10–15 minutes</li>
        <li>Walk for 5 minutes and reassess</li>
        <li>If heat persists → pause riding</li>
        <li>If swelling worsens → monitor closely</li>
      </ul>

      <h2 id="off-under-saddle" style={styles.h2}>Horse Feels “Off” Under Saddle</h2>
      <ul style={styles.list}>
        <li>Stop immediately — don’t push through it</li>
        <li>Check feet for rocks or soreness</li>
        <li>Lead in-hand and watch stride on a straight line</li>
      </ul>

      <h2 id="stiffness" style={styles.h2}>Tight or Stiff Muscles</h2>
      <ul style={styles.list}>
        <li>Add 5–10 minutes of walking</li>
        <li>Incorporate bending and stretching</li>
        <li>Assess footing and saddle comfort</li>
      </ul>

      <h2 id="skin-irritation" style={styles.h2}>Minor Skin Irritation</h2>
      <ul style={styles.list}>
        <li>Clean and dry the area</li>
        <li>Remove rubbing tack or boots</li>
        <li>Avoid moisture traps</li>
      </ul>

      <h2 id="not-drinking" style={styles.h2}>Horse Not Drinking</h2>
      <ul style={styles.list}>
        <li>Offer lukewarm water</li>
        <li>Provide loose salt</li>
        <li>Check manure for dryness</li>
      </ul>

      <h2 id="behavior-change" style={styles.h2}>Sudden Behavioral Change</h2>
      <ul style={styles.list}>
        <li>Pain often drives behavior — assess body first</li>
        <li>Check saddle fit and poll tension</li>
        <li>Evaluate environmental stressors</li>
      </ul>

      <h2 id="hauling" style={styles.h2}>Hauling Checklist</h2>
      <ul style={styles.list}>
        <li>Offer water at every stop</li>
        <li>Check legs after unloading</li>
        <li>Hand-walk to restore circulation</li>
      </ul>

      <h2 id="stop-reassess" style={styles.h2}>When to Stop & Reassess</h2>
      <ul style={styles.list}>
        <li>Sudden swelling</li>
        <li>Persistent heat after cooling</li>
        <li>Sharp pain response</li>
        <li>New unevenness in stride</li>
      </ul>

      <SectionNav
        prev={{ href: '/environment', label: 'Environment & Stress' }}
        next={null}
      />
    </Layout>
  );
}

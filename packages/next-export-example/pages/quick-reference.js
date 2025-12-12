import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';

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

      <h1>Quick Reference</h1>
      <p>Fast answers for common in-the-moment decisions.</p>

      <h2 id="leg-heat">1. Heat or Swelling in a Leg</h2>
      <ul>
        <li>Cold hose 10–15 minutes</li>
        <li>Walk 5 minutes and reevaluate</li>
        <li>If heat persists → pause riding</li>
        <li>If swelling worsens → monitor 2–4 hours</li>
      </ul>

      <h2 id="off-under-saddle">2. Horse Feels “Off” Under Saddle</h2>
      <ul>
        <li>Stop immediately — do not push through</li>
        <li>Check feet for rocks</li>
        <li>Lead straight line and watch stride</li>
      </ul>

      <h2 id="stiffness">3. Tight or Stiff Muscles</h2>
      <ul>
        <li>Walk 5–10 more minutes</li>
        <li>Light stretching</li>
      </ul>

      <h2 id="skin-irritation">4. Minor Skin Irritation</h2>
      <ul>
        <li>Clean and dry area</li>
        <li>Remove rubbing tack/boots</li>
      </ul>

      <h2 id="not-drinking">5. Horse Not Drinking</h2>
      <ul>
        <li>Offer lukewarm water</li>
        <li>Add handful of grain or flavor</li>
        <li>Check manure for dryness</li>
      </ul>

      <h2 id="behavior-change">6. Sudden Behavior Change</h2>
      <ul>
        <li>Pain first → check body</li>
        <li>Evaluate saddle fit & teeth</li>
      </ul>

      <h2 id="hauling">7. Hauling Checklist</h2>
      <ul>
        <li>Offer water often</li>
        <li>Check legs after unloading</li>
        <li>Walk to restore circulation</li>
      </ul>

      <h2 id="stop-reassess">8. When to Stop & Reassess</h2>
      <ul>
        <li>Sudden swelling</li>
        <li>Persistent heat</li>
        <li>Sharp pain response</li>
      </ul>

      <SectionNav
        prev={{ href: '/environment', label: 'Environment & Stress' }}
        next={null}
      />

    </Layout>
  );
}

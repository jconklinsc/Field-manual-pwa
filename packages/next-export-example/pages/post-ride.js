import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';

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

      <h1>Post-Ride Recovery</h1>
      <p>
        Recovery begins the moment the ride ends.
      </p>

      <h2 id="cooldown" style={{ marginTop: '24px', marginBottom: '12px' }}>1. Cool-Down</h2>
      <ul>
        <li>5–10 minutes walking</li>
        <li>Encourage stretching</li>
      </ul>

      <h2 id="movement" style={{ marginTop: '24px', marginBottom: '12px' }}>2. Movement Check</h2>
      <ul>
        <li>Even weight-bearing</li>
        <li>No toe dragging</li>
      </ul>

      <h2 id="heat-scan">3. Heat & Swelling Scan</h2>
      <ul>
        <li>Tendons cool and tight</li>
        <li>Check joints for heat</li>
      </ul>

      <h2 id="back-body">4. Back & Body Assessment</h2>
      <ul>
        <li>Shoulders and back relaxed</li>
      </ul>

      <h2 id="hydration">5. Hydration</h2>
      <ul>
        <li>Offer water immediately</li>
      </ul>

      <h2 id="recovery">6. Restorative Measures</h2>
      <ul>
        <li>Light hand walking</li>
      </ul>

      <h2 id="next-day">7. Next-Day Check</h2>
      <ul>
        <li>No new swelling</li>
      </ul>

      <SectionNav
        prev={{ href: '/pre-ride', label: 'Pre-Ride Prep' }}
        next={{ href: '/skin-and-legs', label: 'Skin & Legs' }}
      />

    </Layout>
  );
}

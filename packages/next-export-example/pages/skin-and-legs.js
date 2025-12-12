import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';

export default function SkinAndLegs() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'daily-check', label: 'Daily Leg Inspection' },
          { id: 'digital-pulse', label: 'Digital Pulse Check' },
          { id: 'skin-red-flags', label: 'Skin Condition Red Flags' },
          { id: 'heat-patterns', label: 'Heat & Swelling Patterns' },
          { id: 'palpation', label: 'Palpation Techniques' },
          { id: 'concern', label: 'When to Be Concerned' },
          { id: 'recovery', label: 'Recovery Basics' }
        ]}
      />

      <h1>Skin & Legs</h1>
      <p>
        Legs and skin tell the truth. Small changes reveal developing issues long before
        lameness or visible discomfort appear. This section teaches quick, reliable checks
        that help catch problems early and keep horses sound.
      </p>

      <h2 id="daily-check" style={{ marginTop: '24px', marginBottom: '12px' }}>
        1. Daily Leg Inspection
      </h2>
      <ul>
        <li>Tendons should feel cool, tight, and uniform</li>
        <li>No new swelling or puffiness</li>
        <li>No heat around joints or suspensories</li>
        <li>Check for cuts or irritation hidden under hair</li>
        <li>Even weight distribution on all four feet</li>
      </ul>

      <h2 id="digital-pulse" style={{ marginTop: '24px', marginBottom: '12px' }}>
        2. Digital Pulse Check
      </h2>
      <p>A normal digital pulse is soft and faint. Watch for:</p>
      <ul>
        <li>Strong, bounding pulse — early sign of inflammation</li>
        <li>Heat in the hoof capsule</li>
        <li>Tenderness during tight turns</li>
      </ul>

      <h2 id="skin-red-flags" style={{ marginTop: '24px', marginBottom: '12px' }}>
        3. Skin Condition Red Flags
      </h2>
      <ul>
        <li>Scabs or crusting on pasterns</li>
        <li>Dandruff or oily buildup on topline</li>
        <li>Itching, rubbing, hair loss patches</li>
        <li>Thickened “elephant skin” texture</li>
        <li>Moisture trapped under wraps or boots</li>
      </ul>

      <h2 id="heat-patterns" style={{ marginTop: '24px', marginBottom: '12px' }}>
        4. Heat & Swelling Patterns
      </h2>
      <p>Patterns matter:</p>
      <ul>
        <li>Front legs swollen → hoof/knee stress</li>
        <li>Hind legs stocked up → circulation issue</li>
        <li>One leg swollen → acute injury</li>
        <li>Two matching legs → systemic or environmental cause</li>
      </ul>

      <h2 id="palpation" style={{ marginTop: '24px', marginBottom: '12px' }}>
        5. Palpation Techniques
      </h2>
      <ul>
        <li>Use upward strokes along tendons</li>
        <li>Press gently around joints</li>
        <li>Compare both sides for symmetry</li>
        <li>Watch for flinching or tension</li>
      </ul>

      <h2 id="concern" style={{ marginTop: '24px', marginBottom: '12px' }}>
        6. When to Be Concerned
      </h2>
      <ul>
        <li>Sudden swelling</li>
        <li>Heat that persists after cooling</li>
        <li>Localized sharp pain response</li>
        <li>New stride unevenness</li>
      </ul>

      <h2 id="recovery" style={{ marginTop: '24px', marginBottom: '12px' }}>
        7. Recovery Basics
      </h2>
      <ul>
        <li>Keep areas clean and dry</li>
        <li>Remove moisture traps (dirty polos, damp boots)</li>
        <li>Light hand-walking if appropriate</li>
        <li>Monitor 24 hours before returning to work</li>
      </ul>

      <p>
        The goal isn’t to overreact — it’s to react early.  
        Daily checks protect long-term soundness.
      </p>

      <SectionNav
        prev={{ href: '/post-ride', label: 'Post-Ride Recovery' }}
        next={{ href: '/environment', label: 'Environment & Stress' }}
      />

    </Layout>
  );
}

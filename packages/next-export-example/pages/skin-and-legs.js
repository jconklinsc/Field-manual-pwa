import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';

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
      <p>Use calm, consistent hands from knee or hock downward:</p>
      <ul>
        <li>Tendons should feel cool, tight, and uniform</li>
        <li>No new swelling or puffiness</li>
        <li>No heat around joints or suspensories</li>
        <li>Look for cuts, scabs, or irritation hidden under hair</li>
        <li>Even weight distribution on all four feet</li>
      </ul>

      <h2 id="digital-pulse" style={{ marginTop: '24px', marginBottom: '12px' }}>
        2. Digital Pulse Check
      </h2>
      <p>A normal digital pulse is soft and faint. Watch for:</p>
      <ul>
        <li>Strong, bounding pulse — early sign of inflammation or laminitis</li>
        <li>Heat in the hoof capsule</li>
        <li>Tenderness during tight turns</li>
      </ul>

      <h2 id="skin-red-flags" style={{ marginTop: '24px', marginBottom: '12px' }}>
        3. Skin Condition Red Flags
      </h2>
      <ul>
        <li>Scabs or crusting on pasterns (possible dermatitis)</li>
        <li>Dandruff or oily buildup on topline</li>
        <li>Itching, rubbing, or patches of hair loss</li>
        <li>Thickened or “elephant” skin texture</li>
        <li>Moisture trapped under boots or wraps</li>
      </ul>

      <h2 id="heat-patterns" style={{ marginTop: '24px', marginBottom: '12px' }}>
        4. Heat & Swelling Patterns
      </h2>
      <p>Patterns tell a story:</p>
      <ul>
        <li>Front legs swollen → often hoof or knee-related</li>
        <li>Hind legs stocked up → circulation or stall rest issue</li>
        <li>One leg swollen → likely acute injury</li>
        <li>Two matching legs swollen → systemic or environmental cause</li>
      </ul>

      <h2 id="palpation" style={{ marginTop: '24px', marginBottom: '12px' }}>
        5. Palpation Techniques
      </h2>
      <p>Move slowly — horses respond best to predictable hands:</p>
      <ul>
        <li>Use upward strokes along tendons</li>
        <li>Press gently around joints to detect heat or pain response</li>
        <li>Use two fingers to compare ligaments side-to-side</li>
        <li>Watch reactions: flinch, tension, stepping away</li>
      </ul>

      <h2 id="concern" style={{ marginTop: '24px', marginBottom: '12px' }}>
        6. When to Be Concerned
      </h2>
      <p>If you notice any of these, <strong>pause work and reassess</strong> immediately:</p>
      <ul>
        <li>Sudden swelling that wasn’t present earlier</li>
        <li>Heat that persists after cooling</li>
        <li>Localized sharp pain response</li>
        <li>New unevenness in stride</li>
        <li>Visible irritation under tack or wraps</li>
      </ul>

      <h2 id="recovery" style={{ marginTop: '24px', marginBottom: '12px' }}>
        7. Recovery Basics
      </h2>
      <ul>
        <li>Keep affected areas clean and dry</li>
        <li>Remove moisture traps like dirty polos or damp boots</li>
        <li>Support circulation with light hand-walking if appropriate</li>
        <li>Monitor closely for 24 hours before returning to work</li>
      </ul>

      <p>
        The goal isn’t to overreact — it’s to react early.  
        Small daily observations prevent long-term problems and protect your horse’s soundness.
      </p>

    </Layout>
  );
}

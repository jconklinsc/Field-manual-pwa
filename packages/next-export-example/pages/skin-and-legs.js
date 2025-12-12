import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function SkinAndLegs() {
  return (
    <Layout>
      <Nav />

      <h1>Skin & Legs</h1>
      <p>
        Legs and skin tell the truth. Small changes reveal developing issues long before
        lameness or visible discomfort appear. This section teaches quick, reliable checks
        that help catch problems early and keep horses sound.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>1. Daily Leg Inspection</h2>
      <p>Use calm, consistent hands from knee/hock downward:</p>
      <ul>
        <li>Tendons should feel cool, tight, and uniform</li>
        <li>No new swelling, puffiness, or “mushy” areas</li>
        <li>No heat around joints or suspensories</li>
        <li>Check for cuts, scabs, or irritation hidden under hair</li>
        <li>Even weight distribution on all four feet</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>2. Digital Pulse Check</h2>
      <p>A normal digital pulse is soft and faint. Watch for:</p>
      <ul>
        <li>Strong, bounding pulse — early sign of inflammation or laminitis</li>
        <li>Heat in the hoof capsule</li>
        <li>Tenderness when the horse turns tightly</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>3. Skin Condition Red Flags</h2>
      <p>Early detection prevents long healing times. Look for:</p>
      <ul>
        <li>Scabs or crusting on the pasterns (possible dermatitis)</li>
        <li>Oily buildup or dandruff along the topline</li>
        <li>Itching, rubbing, or hair loss patches</li>
        <li>Thickened skin or “elephant skin” texture</li>
        <li>Moisture trapped under boots or wraps</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>4. Heat & Swelling Patterns</h2>
      <p>Pattern recognition matters:</p>
      <ul>
        <li>Front legs swollen = often hoof or knee-related</li>
        <li>Hind legs “stocked up” = circulation or stall rest issue</li>
        <li>One leg swollen = usually an acute injury</li>
        <li>Two matching legs swollen = systemic or environmental cause</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>5. Palpation Techniques</h2>
      <p>Move slowly — horses respond best to predictable hands:</p>
      <ul>
        <li>Use upward strokes along tendons</li>
        <li>Press gently around joints to detect heat or pain response</li>
        <li>Check ligament areas with two fingers, comparing both sides</li>
        <li>Note reactions: flinch, tail swish, tightening, stepping away</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>6. When to Be Concerned</h2>
      <p>If you notice any of these, pause work and reassess:</p>
      <ul>
        <li>Sudden swelling that wasn’t present earlier</li>
        <li>Heat that persists after cooling</li>
        <li>Localized sharp pain response</li>
        <li>New unevenness in stride</li>
        <li>Visible irritation under tack or wraps</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>7. Skin & Leg Recovery Basics</h2>
      <ul>
        <li>Keep affected areas clean and dry</li>
        <li>Remove moisture traps like dirty polos or damp boots</li>
        <li>Support circulation with light hand-walking if appropriate</li>
        <li>Monitor for 24 hours before returning to work</li>
      </ul>

      <p>
        The goal isn’t to overreact — it’s to react early.  
        Small daily observations prevent long-term problems and protect your horse’s soundness.
      </p>

    </Layout>
  );
}

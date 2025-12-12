import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';

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
          { id: 'hauling', label: 'Hauling Checklist (Quick)' },
          { id: 'stop-reassess', label: 'When to Stop and Reassess' }
        ]}
      />

      <h1>Quick Reference</h1>
      <p>
        Fast answers for common in-the-moment decisions. Designed for use in the barn,
        the trailer, or during busy show days when clarity matters most.
      </p>

      <h2 id="leg-heat" style={{ marginTop: '24px', marginBottom: '12px' }}>
        1. Heat or Swelling in a Leg
      </h2>
      <ul>
        <li>Cold hose or ice for 10–15 minutes</li>
        <li>Walk the horse for 5 minutes and reevaluate</li>
        <li>If heat persists → <strong>pause riding</strong></li>
        <li>If swelling increases → <strong>monitor closely for 2–4 hours</strong></li>
      </ul>

      <h2 id="off-under-saddle" style={{ marginTop: '24px', marginBottom: '12px' }}>
        2. Horse Feels “Off” Under Saddle
      </h2>
      <ul>
        <li>Stop immediately — do not push through it</li>
        <li>Check feet for rocks or debris</li>
        <li>Walk in-hand on a straight line and watch for unevenness</li>
        <li>If still questionable → <strong>end the ride</strong></li>
      </ul>

      <h2 id="stiffness" style={{ marginTop: '24px', marginBottom: '12px' }}>
        3. Tight or Stiff Muscles
      </h2>
      <ul>
        <li>Walk an additional 5–10 minutes</li>
        <li>Incorporate gentle bending and stretching</li>
        <li>Check saddle fit and cinch/girth comfort</li>
        <li>Evaluate footing — deep or slick footing increases tension</li>
      </ul>

      <h2 id="skin-irritation" style={{ marginTop: '24px', marginBottom: '12px' }}>
        4. Minor Skin Irritation
      </h2>
      <ul>
        <li>Clean area gently — remove dirt/sweat buildup</li>
        <li>Dry completely before applying topicals</li>
        <li>Check wraps, boots, or tack for rubbing points</li>
        <li>If spreading or worsening → reassess in 24 hours</li>
      </ul>

      <h2 id="not-drinking" style={{ marginTop: '24px', marginBottom: '12px' }}>
        5. Horse Not Drinking
      </h2>
      <ul>
        <li>Offer lukewarm water — many horses prefer it</li>
        <li>Add a handful of grain or flavoring to encourage sipping</li>
        <li>Ensure salt availability</li>
        <li>Check manure: dry, small balls indicate dehydration</li>
      </ul>

      <h2 id="behavior-change" style={{ marginTop: '24px', marginBottom: '12px' }}>
        6. Sudden Behavioral Change
      </h2>
      <ul>
        <li>Pain first — behavior follows the body</li>
        <li>Check back, teeth, poll, saddle fit</li>
        <li>Evaluate environment (wind, new horses, noise)</li>
        <li>If persistent → reduce workload and reassess tomorrow</li>
      </ul>

      <h2 id="hauling" style={{ marginTop: '24px', marginBottom: '12px' }}>
        7. Hauling Checklist (Quick)
      </h2>
      <ul>
        <li>Offer water at every stop</li>
        <li>Check legs immediately after unloading</li>
        <li>Normal appetite?</li>
        <li>Normal manure?</li>
        <li>Walk the horse to restore circulation</li>
      </ul>

      <h2 id="stop-reassess" style={{ marginTop: '24px', marginBottom: '12px' }}>
        8. When to Stop and Reassess
      </h2>
      <p>If you notice any of the following, pause work immediately:</p>
      <ul>
        <li>Sudden swelling</li>
        <li>Heat that persists after cooling</li>
        <li>Shortened stride or toe dragging</li>
        <li>Sharp reaction on palpation</li>
        <li>Refusal behaviors that appear “out of nowhere”</li>
      </ul>

      <p>
        Quick decisions protect long-term soundness.  
        When in doubt — pause, observe, and compare to baseline.
      </p>

    </Layout>
  );
}

import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function QuickReference() {
  return (
    <Layout>
      <Nav />

      <h1>Quick Reference</h1>
      <p>
        Fast answers for common in-the-moment decisions. Designed for those times when you
        need clarity quickly — in the barn, at the trailer, or during a busy show day.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>1. Heat or Swelling in a Leg</h2>
      <ul>
        <li>Cold hose or ice for 10–15 minutes</li>
        <li>Walk the horse for 5 minutes to assess movement</li>
        <li>If heat persists → <strong>pause riding</strong></li>
        <li>If swelling increases → <strong>monitor closely and reassess in 2–4 hours</strong></li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>2. Horse Feels “Off” Under Saddle</h2>
      <ul>
        <li>Stop immediately — do not push through it</li>
        <li>Check feet for rocks or debris</li>
        <li>Walk the horse on a straight line and watch for unevenness</li>
        <li>If still questionable → <strong>end the ride</strong></li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>3. Tight or Stiff Muscles</h2>
      <ul>
        <li>Walk for an additional 5–10 minutes</li>
        <li>Perform light bending and long-and-low stretching</li>
        <li>Check saddle fit and cinch/girth area</li>
        <li>Evaluate footing — deep or slick footing increases tension</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>4. Minor Skin Irritation</h2>
      <ul>
        <li>Clean the area gently — remove dirt/sweat buildup</li>
        <li>Dry completely before applying any topical support</li>
        <li>Check boots, wraps, or tack for rubbing points</li>
        <li>If spreading or worsening → monitor over 24 hours</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>5. Horse Not Drinking</h2>
      <ul>
        <li>Offer lukewarm water (many horses prefer it)</li>
        <li>Add a small handful of grain to encourage sipping</li>
        <li>Provide salt or electrolytes if appropriate</li>
        <li>Monitor manure — dry, small balls indicate dehydration</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>6. Sudden Behavioral Change</h2>
      <ul>
        <li>Check for pain first — behavior follows the body</li>
        <li>Look at teeth, tack fit, and back reaction</li>
        <li>Evaluate environment (wind, new horses, loud activity)</li>
        <li>If persistent → reduce workload and reassess tomorrow</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>7. Hauling Checklist (Quick)</h2>
      <ul>
        <li>Water at every stop</li>
        <li>Leg check at unloading</li>
        <li>Normal appetite?</li>
        <li>Normal manure?</li>
        <li>Walk the horse to restore circulation</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>8. When to Stop and Reassess</h2>
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

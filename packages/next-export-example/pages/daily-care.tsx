import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function DailyCare() {
  return (
    <Layout>
      <Nav />

      <h1>Daily Care</h1>
      <p>
        The foundation of soundness is knowing what “normal” looks like for your horse.
        Daily care is less about doing more — and more about observing wisely.
      </p>

      <h2>1. Daily Observation Checklist</h2>
      <ul>
        <li>Eyes clear and bright</li>
        <li>Nostrils clean, normal airflow</li>
        <li>No swelling or heat in legs</li>
        <li>Normal manure consistency</li>
        <li>Even weight-bearing on all four feet</li>
        <li>Alert but calm demeanor</li>
      </ul>

      <h2>2. Quick Hands-On Assessment</h2>
      <p>
        Spend 30 seconds running your hands along the horse’s body:
      </p>
      <ul>
        <li>Check for new bumps, cuts, swelling, or sensitivity</li>
        <li>Feel for muscle tightness in the neck, shoulders, back, and hindquarters</li>
        <li>Light palpation along spine — should show no dramatic reactions</li>
      </ul>

      <h2>3. Movement Snapshot</h2>
      <p>Observe a few steps at walk and trot:</p>
      <ul>
        <li>Even rhythm</li>
        <li>No short steps or toe-dragging</li>
        <li>No reluctance to move forward</li>
        <li>Head level, no bobbing</li>
      </ul>

      <h2>4. Hydration & Feed Check</h2>
      <ul>
        <li>Water bucket decreased as expected</li>
        <li>Salt availability</li>
        <li>Normal appetite</li>
        <li>Skin pinch test: returns in under 1 second</li>
      </ul>

      <h2>5. When Something Feels Off</h2>
      <p>
        If something feels “not quite right,” trust that signal.  
        Pause. Observe again. Compare to baseline.  
        Small changes caught early prevent big problems later.
      </p>

    </Layout>
  );
}

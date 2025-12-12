import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';

export default function PreRide() {
  return (
    <Layout>
      <Nav />

      <TOC 
        items={[
          { id: 'mental', label: 'Mental Check-In' },
          { id: 'hands-on', label: 'Hands-On Body Scan' },
          { id: 'limbs', label: 'Limb & Joint Assessment' },
          { id: 'warmup', label: 'Warm-Up Sequence' },
          { id: 'equipment', label: 'Equipment Integrity Check' },
          { id: 'go-no-go', label: 'Go/No-Go Assessment' }
        ]}
      />

      <h1>Pre-Ride Prep</h1>
      <p>
        Preparing a horse for work is about reducing risk, protecting joints and soft tissue,
        and setting the horse’s mind and body up for a productive session. A few minutes of
        smart preparation can prevent weeks of downtime.
      </p>

      <h2 id="mental" style={{ marginTop: '24px', marginBottom: '12px' }}>
        1. Mental Check-In
      </h2>
      <ul>
        <li>Is the horse alert but not anxious?</li>
        <li>Any unusual stiffness, distraction, or resistance?</li>
        <li>Normal tracking from stall to grooming area?</li>
      </ul>

      <h2 id="hands-on" style={{ marginTop: '24px', marginBottom: '12px' }}>
        2. Hands-On Body Scan
      </h2>
      <p>Use light, consistent pressure along key areas:</p>
      <ul>
        <li>Neck and poll — feel for tension or resistance</li>
        <li>Shoulders — check for warm spots or soreness</li>
        <li>Back and loin — avoid sharp dips or tightening reactions</li>
        <li>Hindquarters — identify twitching, guarding, or asymmetry</li>
      </ul>

      <h2 id="limbs" style={{ marginTop: '24px', marginBottom: '12px' }}>
        3. Limb & Joint Assessment
      </h2>
      <ul>
        <li>Check each leg for heat, swelling, or sensitivity</li>
        <li>Flex and extend each limb gently — smooth movement is expected</li>
        <li>Pick out hooves — check for stones, cracks, or tenderness</li>
      </ul>

      <h2 id="warmup" style={{ marginTop: '24px', marginBottom: '12px' }}>
        4. Warm-Up Sequence
      </h2>
      <p>A proper warm-up should:</p>
      <ul>
        <li>Increase circulation gradually</li>
        <li>Loosen muscles before stress is applied</li>
        <li>Identify stiffness early</li>
      </ul>

      <p>Suggested routine:</p>
      <ul>
        <li>5 minutes of active walk</li>
        <li>Large circles to stretch shoulders and ribcage</li>
        <li>Straight lines to evaluate rhythm and stride</li>
        <li>Light trot only once movement is even and relaxed</li>
      </ul>

      <h2 id="equipment" style={{ marginTop: '24px', marginBottom: '12px' }}>
        5. Equipment Integrity Check
      </h2>
      <ul>
        <li>Girth/cinch free of cracks or splits</li>
        <li>Stirrups level and functional</li>
        <li>Bit smooth and correctly fitted</li>
        <li>Pad positioned evenly with no folds or debris</li>
        <li>Boots/wraps applied securely and comfortably</li>
      </ul>

      <h2 id="go-no-go" style={{ marginTop: '24px', marginBottom: '12px' }}>
        6. “Go / No-Go” Assessment
      </h2>
      <p>Before mounting, ask yourself:</p>
      <ul>
        <li>Is the horse physically ready to work?</li>
        <li>Is the horse mentally in a safe, cooperative state?</li>
        <li>Did any part of the prep raise a red flag?</li>
      </ul>

      <p>
        When in doubt, pause.  
        A 5-minute reassessment is always better than a 5-week layup.
      </p>

    </Layout>
  );
}

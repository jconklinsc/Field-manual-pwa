import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function PreRide() {
  return (
    <Layout>
      <Nav />

      <h1>Pre-Ride Prep</h1>
      <p>
        Preparing a horse for work is about reducing risk, protecting joints and soft tissue,
        and setting the horse’s mind and body up for a productive session. A few minutes of
        smart preparation can prevent weeks of downtime.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>1. Mental Check-In</h2>
      <ul>
        <li>Is the horse alert but not anxious?</li>
        <li>Is there any unusual stiffness, distraction, or resistance?</li>
        <li>Is the horse tracking normally from the stall to the grooming area?</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>2. Hands-On Body Scan</h2>
      <p>Use light, consistent pressure along key areas:</p>
      <ul>
        <li>Neck and poll — look for tension or resistance</li>
        <li>Shoulders — identify warm spots or soreness</li>
        <li>Back and loin — watch for dipping or tightening</li>
        <li>Hindquarters — feel for jumpiness, twitching, or asymmetry</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>3. Limb & Joint Assessment</h2>
      <ul>
        <li>Check each leg for heat, swelling, or sensitivity</li>
        <li>Flex and extend each limb gently — smooth movement is expected</li>
        <li>Pick out hooves, checking for packed debris or tenderness</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>4. Warm-Up Sequence</h2>
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

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>5. Equipment Integrity Check</h2>
      <ul>
        <li>Girth/cinch free of cracks or splits</li>
        <li>Stirrups level and functional</li>
        <li>Bits smooth and correctly fitted</li>
        <li>Pad positioned evenly with no folds or debris</li>
        <li>Boots or wraps applied correctly and securely</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>6. “Go/No-Go” Assessment</h2>
      <p>
        Before mounting, ask yourself:
      </p>
      <ul>
        <li>Is the horse physically ready to work?</li>
        <li>Is the horse mentally in a safe, cooperative state?</li>
        <li>Is there anything unusual that warrants caution?</li>
      </ul>

      <p>
        If anything feels “off,” pause.  
        A 5-minute reassessment is always better than a 5-week layup.
      </p>

    </Layout>
  );
}

import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function PostRide() {
  return (
    <Layout>
      <Nav />

      <h1>Post-Ride Recovery</h1>
      <p>
        Recovery begins the moment the ride ends. A thoughtful cool-down and quick assessment 
        protect muscle function, reduce inflammation, and help prevent next-day stiffness.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>1. Cool-Down Sequence</h2>
      <p>A proper cool-down should gradually return the horse to a resting state:</p>
      <ul>
        <li>5–10 minutes of active walk to flush out lactic acid</li>
        <li>Encourage long-and-low stretching if the horse offers it</li>
        <li>Avoid sudden halts — ease them into stillness</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>2. Post-Ride Movement Check</h2>
      <p>Observe movement as you lead the horse back:</p>
      <ul>
        <li>Even weight-bearing</li>
        <li>Normal tempo and stride length</li>
        <li>No toe dragging or reluctance</li>
        <li>No visible fatigue or “tight” steps</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>3. Heat & Swelling Scan</h2>
      <p>Once untacked, run your hands along all four limbs:</p>
      <ul>
        <li>Check tendons — should feel cool and firm</li>
        <li>Knees and hocks — no heat, swelling, or sharp reactions</li>
        <li>Pasterns — no puffiness after harder work</li>
        <li>Hooves — normal digital pulse, no excessive heat</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>4. Back & Body Assessment</h2>
      <p>Check for soreness or muscle tension:</p>
      <ul>
        <li>Withers and shoulders — should remain relaxed</li>
        <li>Back muscles — avoid sharp dips or tightening</li>
        <li>Loin and croup — smooth, even muscle tone</li>
      </ul>
      <p>
        A small amount of tightness can be normal; sharp, localized reactions are not.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>5. Hydration & Cooling</h2>
      <ul>
        <li>Offer water immediately — horses rarely “overdrink” post-ride</li>
        <li>Scrape water off after hosing (water left on traps heat)</li>
        <li>Check respiration — aim for steady breathing before stalling</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>6. Restorative Measures</h2>
      <p>After harder or longer sessions, consider supportive recovery:</p>
      <ul>
        <li>Light movement in-hand to maintain circulation</li>
        <li>A calm environment to reduce adrenaline come-down</li>
        <li>Appropriate topical support to reduce inflammation</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>7. Next-Day Check</h2>
      <p>Recovery doesn’t end when the ride ends. Evaluate the horse the next day:</p>
      <ul>
        <li>No new swelling</li>
        <li>Normal stride at walk from the stall</li>
        <li>Normal willingness to work</li>
        <li>No tenderness on palpation</li>
      </ul>

      <p>
        A horse that finishes the ride sound and starts the next day sound is a horse building 
        long-term resilience and performance.
      </p>

    </Layout>
  );
}

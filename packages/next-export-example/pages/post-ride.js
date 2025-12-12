import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';

export default function PostRide() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'cooldown', label: 'Cool-Down Sequence' },
          { id: 'movement', label: 'Post-Ride Movement Check' },
          { id: 'heat-scan', label: 'Heat & Swelling Scan' },
          { id: 'back-body', label: 'Back & Body Assessment' },
          { id: 'hydration', label: 'Hydration & Cooling' },
          { id: 'recovery', label: 'Restorative Measures' },
          { id: 'next-day', label: 'Next-Day Check' }
        ]}
      />

      <h1>Post-Ride Recovery</h1>
      <p>
        Recovery begins the moment the ride ends. A thoughtful cool-down and quick assessment 
        protect muscle function, reduce inflammation, and help prevent next-day stiffness.
      </p>

      <h2 id="cooldown" style={{ marginTop: '24px', marginBottom: '12px' }}>
        1. Cool-Down Sequence
      </h2>
      <p>A proper cool-down should gradually return the horse to a resting state:</p>
      <ul>
        <li>5–10 minutes of active walk to flush out lactic acid</li>
        <li>Encourage long-and-low stretching if the horse offers it</li>
        <li>Avoid sudden halts — ease them into stillness</li>
      </ul>

      <h2 id="movement" style={{ marginTop: '24px', marginBottom: '12px' }}>
        2. Post-Ride Movement Check
      </h2>
      <p>Observe movement as you lead the horse back:</p>
      <ul>
        <li>Even weight-bearing</li>
        <li>Normal tempo and stride length</li>
        <li>No toe dragging or reluctance</li>
        <li>No visible fatigue or “tight” steps</li>
      </ul>

      <h2 id="heat-scan" style={{ marginTop: '24px', marginBottom: '12px' }}>
        3. Heat & Swelling Scan
      </h2>
      <p>Once untacked, run your hands along all four limbs:</p>
      <ul>
        <li>Tendons — cool, tight, and uniform</li>
        <li>Knees and hocks — no heat, swelling, or sharp reactions</li>
        <li>Pasterns — free of puffiness after harder work</li>
        <li>Hooves — normal digital pulse and temperature</li>
      </ul>

      <h2 id="back-body" style={{ marginTop: '24px', marginBottom: '12px' }}>
        4. Back & Body Assessment
      </h2>
      <p>Check for soreness or muscle tension:</p>
      <ul>
        <li>Shoulders and withers — relaxed and even</li>
        <li>Back muscles — no sharp dips or tightening</li>
        <li>Loin and croup — smooth, responsive muscle tone</li>
      </ul>
      <p>A small amount of tightness can be normal; sharp, localized reactions are not.</p>

      <h2 id="hydration" style={{ marginTop: '24px', marginBottom: '12px' }}>
        5. Hydration & Cooling
      </h2>
      <ul>
        <li>Offer water immediately — horses rarely “overdrink” post-ride</li>
        <li>Scrape water after hosing — standing water traps heat</li>
        <li>Check respiration — aim for steady breathing before stalling</li>
      </ul>

      <h2 id="recovery" style={{ marginTop: '24px', marginBottom: '12px' }}>
        6. Restorative Measures
      </h2>
      <p>After harder or longer sessions, consider supportive recovery:</p>
      <ul>
        <li>Light hand-walking to maintain circulation</li>
        <li>A calm environment to release mental tension</li>
        <li>Appropriate topical support to reduce inflammation</li>
      </ul>

      <h2 id="next-day" style={{ marginTop: '24px', marginBottom: '12px' }}>
        7. Next-Day Check
      </h2>
      <p>Evaluate the horse the next day for true recovery:</p>
      <ul>
        <li>No new swelling</li>
        <li>Normal stride from the stall</li>
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

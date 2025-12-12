import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';

export default function Environment() {
  return (
    <Layout>
      <Nav />

      <TOC
        items={[
          { id: 'weather', label: 'Weather Shifts' },
          { id: 'footing', label: 'Ground & Footing' },
          { id: 'hauling', label: 'Hauling & Travel Stress' },
          { id: 'routine', label: 'Routine Disruptions' },
          { id: 'show', label: 'Show Environment Stress' },
          { id: 'barn', label: 'Barn Environment Red Flags' },
          { id: 'behavior', label: 'Behavioral Stress Indicators' },
          { id: 'reduce', label: 'How to Reduce Stress' }
        ]}
      />

      <h1>Environment & Stress</h1>
      <p>
        A horse’s environment shapes everything — movement, hydration, breathing, digestion,
        behavior, and overall soundness. Learn to read environmental stressors early.
      </p>

      <h2 id="weather" style={{ marginTop: '24px', marginBottom: '12px' }}>
        1. Weather Shifts
      </h2>
      <ul>
        <li><strong>Cold snaps:</strong> stiffness and longer warm-up times</li>
        <li><strong>Heat waves:</strong> dehydration/electrolyte loss</li>
        <li><strong>High humidity:</strong> harder cooling</li>
        <li><strong>Windy days:</strong> increased alertness/spookiness</li>
      </ul>

      <h2 id="footing" style={{ marginTop: '24px', marginBottom: '12px' }}>
        2. Ground & Footing
      </h2>
      <ul>
        <li><strong>Deep footing:</strong> tendon strain</li>
        <li><strong>Hard footing:</strong> joint concussion risk</li>
        <li><strong>Uneven ground:</strong> missteps</li>
        <li><strong>Slippery:</strong> muscle guarding</li>
      </ul>

      <h2 id="hauling" style={{ marginTop: '24px', marginBottom: '12px' }}>
        3. Hauling & Travel Stress
      </h2>
      <ul>
        <li>Offer water frequently</li>
        <li>Check legs after unloading</li>
        <li>Expect 12–24 hrs of travel fatigue</li>
        <li>Monitor appetite and manure</li>
      </ul>

      <h2 id="routine" style={{ marginTop: '24px', marginBottom: '12px' }}>
        4. Routine Disruptions
      </h2>
      <ul>
        <li>New turnout groups</li>
        <li>Feeding schedule changes</li>
        <li>Stall relocations</li>
        <li>Handler/groom changes</li>
      </ul>

      <h2 id="show" style={{ marginTop: '24px', marginBottom: '12px' }}>
        5. Show Environment Stress
      </h2>
      <ul>
        <li>Loudspeakers & sudden noise</li>
        <li>Crowded warm-ups</li>
        <li>New footing</li>
        <li>Overstimulation + travel fatigue</li>
      </ul>

      <h2 id="barn" style={{ marginTop: '24px', marginBottom: '12px' }}>
        6. Barn Environment Red Flags
      </h2>
      <ul>
        <li>Ammonia smell → respiratory irritation</li>
        <li>Poor ventilation → trapped dust/moisture</li>
        <li>Stagnant or dirty water</li>
        <li>Chaotic routines → anxious horses</li>
      </ul>

      <h2 id="behavior" style={{ marginTop: '24px', marginBottom: '12px' }}>
        7. Behavioral Stress Indicators
      </h2>
      <ul>
        <li>Spookiness increases</li>
        <li>Jaw/poll tension</li>
        <li>Shorter stride</li>
        <li>Reduced appetite</li>
        <li>Irritability during grooming</li>
      </ul>

      <h2 id="reduce" style={{ marginTop: '24px', marginBottom: '12px' }}>
        8. How to Reduce Stress
      </h2>
      <ul>
        <li>Maintain consistent routines</li>
        <li>Ensure clean water access</li>
        <li>Hand-walk after hauling</li>
        <li>Reduce workload during extreme weather</li>
        <li>Allow settling time in new environments</li>
      </ul>

      <p>Environment shapes performance more than riders realize.</p>

      <SectionNav
        prev={{ href: '/skin-and-legs', label: 'Skin & Legs' }}
        next={{ href: '/quick-reference', label: 'Quick Reference' }}
      />

    </Layout>
  );
}

import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';

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
          { id: 'reduce', label: 'How to Reduce Environmental Stress' }
        ]}
      />

      <h1>Environment & Stress</h1>
      <p>
        A horse’s environment shapes everything — movement, hydration, breathing,
        hooves, digestion, and behavior. This section helps you read environmental
        stressors quickly so you can adjust before problems appear.
      </p>

      <h2 id="weather" style={{ marginTop: '24px', marginBottom: '12px' }}>
        1. Weather Shifts
      </h2>
      <p>Sudden weather changes affect comfort, hydration, and performance.</p>
      <ul>
        <li><strong>Cold snaps:</strong> increased stiffness, longer warm-up times</li>
        <li><strong>Heat waves:</strong> dehydration and electrolyte depletion</li>
        <li><strong>High humidity:</strong> harder for horses to cool themselves</li>
        <li><strong>Windy days:</strong> heightened alertness and spookiness</li>
      </ul>
      <p><em>Adjust workload and warm-up based on conditions — not the calendar.</em></p>

      <h2 id="footing" style={{ marginTop: '24px', marginBottom: '12px' }}>
        2. Ground & Footing
      </h2>
      <p>Footing quality directly affects soundness and confidence.</p>
      <ul>
        <li><strong>Deep footing:</strong> tendon and suspensory strain risk</li>
        <li><strong>Hard ground:</strong> increased joint concussion</li>
        <li><strong>Uneven surfaces:</strong> missteps and micro-strains</li>
        <li><strong>Slippery conditions:</strong> muscle guarding and stifle slipping</li>
      </ul>
      <p>If footing isn’t safe, reduce intensity — even elite riders adjust for footing.</p>

      <h2 id="hauling" style={{ marginTop: '24px', marginBottom: '12px' }}>
        3. Hauling & Travel Stress
      </h2>
      <p>Travel affects hydration, digestion, and mental focus.</p>
      <ul>
        <li>Offer water at every stop</li>
        <li>Check legs after unloading for stocking up</li>
        <li>Expect 12–24 hours of mental/physical “lag” after travel</li>
        <li>Monitor appetite — hauling suppresses gut movement</li>
      </ul>

      <h2 id="routine" style={{ marginTop: '24px', marginBottom: '12px' }}>
        4. Routine Disruptions
      </h2>
      <p>Horses thrive on consistency. Watch for stress when routines shift:</p>
      <ul>
        <li>New turnout groups</li>
        <li>Different feeding schedules</li>
        <li>Stall relocations</li>
        <li>New barn neighbors</li>
        <li>New handlers or grooming styles</li>
      </ul>
      <p>Even small changes can elevate stress levels and affect performance.</p>

      <h2 id="show" style={{ marginTop: '24px', marginBottom: '12px' }}>
        5. Show Environment Stress
      </h2>
      <p>Busy showgrounds overwhelm many horses:</p>
      <ul>
        <li>Loudspeakers and PA systems</li>
        <li>Crowded warm-up rings</li>
        <li>New footing and unfamiliar arenas</li>
        <li>Travel fatigue layered with sensory overload</li>
      </ul>

      <h2 id="barn" style={{ marginTop: '24px', marginBottom: '12px' }}>
        6. Barn Environment Red Flags
      </h2>
      <p>These often go unnoticed but matter greatly:</p>
      <ul>
        <li>Strong ammonia smell — respiratory irritation risk</li>
        <li>Poor winter ventilation — trapped dust and moisture</li>
        <li>Dirty or stale water — reduced water intake</li>
        <li>Chaotic routines — anxious horses</li>
      </ul>

      <h2 id="behavior" style={{ marginTop: '24px', marginBottom: '12px' }}>
        7. Behavioral Stress Indicators
      </h2>
      <p>Stress appears before physical issues do:</p>
      <ul>
        <li>Increased spookiness or startle response</li>
        <li>Jaw or poll tension</li>
        <li>Shortened stride or hesitation</li>
        <li>Reduced appetite or changed manure</li>
        <li>Ear pinning or irritability during grooming</li>
      </ul>

      <h2 id="reduce" style={{ marginTop: '24px', marginBottom: '12px' }}>
        8. How to Reduce Environmental Stress
      </h2>
      <ul>
        <li>Maintain consistent routines whenever possible</li>
        <li>Ensure clean, accessible water at all times</li>
        <li>Use hand-walking after hauling</li>
        <li>Reduce workload during extreme weather swings</li>
        <li>Allow settling time in new environments</li>
      </ul>

      <p>
        Environment shapes performance. A horse that feels comfortable,
        safe, and understood is a horse that performs at its best.
      </p>

    </Layout>
  );
}

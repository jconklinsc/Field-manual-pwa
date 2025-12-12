import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function Environment() {
  return (
    <Layout>
      <Nav />

      <h1>Environment & Stress</h1>
      <p>
        A horse’s environment shapes everything — movement, hydration, breathing,
        hooves, digestion, and behavior. This section helps you read environmental
        stressors quickly so you can adjust before problems appear.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>1. Weather Shifts</h2>
      <p>Sudden changes in weather affect comfort, hydration, and performance.</p>
      <ul>
        <li><strong>Cold snaps:</strong> increased stiffness, slower warm-up times</li>
        <li><strong>Heat waves:</strong> dehydration risk, electrolyte depletion</li>
        <li><strong>High humidity:</strong> harder for horses to cool themselves</li>
        <li><strong>Windy days:</strong> heightened alertness, spooky behavior</li>
      </ul>
      <p><em>Adjust workload and warm-up based on conditions, not the calendar.</em></p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>2. Ground & Footing</h2>
      <p>Footing quality directly affects soundness.</p>
      <ul>
        <li><strong>Deep footing:</strong> increased strain on tendons and ligaments</li>
        <li><strong>Hard ground:</strong> concussion risk for joints and hooves</li>
        <li><strong>Uneven surfaces:</strong> higher risk of missteps and minor strains</li>
        <li><strong>Slippery conditions:</strong> muscle guarding, stifle slipping</li>
      </ul>
      <p>
        If footing isn’t safe, reduce intensity — even elite riders adjust training days
        based on ground conditions.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>3. Hauling & Travel Stress</h2>
      <p>Travel affects hydration, digestion, and mental focus.</p>
      <ul>
        <li>Offer water at every stop</li>
        <li>Check legs after long hauls for stocking up</li>
        <li>Expect 12–24 hours of physical and mental “lag” after travel</li>
        <li>Monitor appetite — hauling suppresses gut movement for many horses</li>
      </ul>
      <p>
        A horse may look fine unloading but still be recovering internally from the trip.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>4. Routine Disruptions</h2>
      <p>Horses thrive on predictability. Pay attention when routines shift:</p>
      <ul>
        <li>New turnout groups</li>
        <li>Different feeding times</li>
        <li>Stall relocations</li>
        <li>New barn mates or neighbors</li>
        <li>Different grooming handling styles</li>
      </ul>
      <p>
        Even small changes can elevate stress levels and affect performance.
      </p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>5. Show Environment Stress</h2>
      <p>Busy showgrounds overwhelm many horses:</p>
      <ul>
        <li>Loudspeakers and sudden noises</li>
        <li>Crowded warm-up rings</li>
        <li>New footing and unfamiliar arenas</li>
        <li>Travel fatigue layered on top</li>
      </ul>
      <p><em>Plan extra time to settle the horse before working or competing.</em></p>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>6. Barn Environment Red Flags</h2>
      <p>These often go unnoticed but matter greatly:</p>
      <ul>
        <li>Ammonia smell in stalls — respiratory irritation risk</li>
        <li>Poor ventilation in winter — trapped moisture and dust</li>
        <li>Stagnant water — lower water intake</li>
        <li>Noisy or chaotic routines — anxious horses</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>7. Behavioral Stress Indicators</h2>
      <p>Stress shows up before physical issues do:</p>
      <ul>
        <li>Increased spookiness</li>
        <li>Jaw or poll tension</li>
        <li>Shortened stride</li>
        <li>Reduced appetite</li>
        <li>More frequent bowel movements</li>
        <li>Ear pinning or irritability during grooming</li>
      </ul>

      <h2 style={{ marginTop: '24px', marginBottom: '12px' }}>8. How to Reduce Environmental Stress</h2>
      <ul>
        <li>Provide consistent routines</li>
        <li>Ensure clean, accessible water at all times</li>
        <li>Use hand-walking to release travel tension</li>
        <li>Reduce workload during weather swings</li>
        <li>Give horses time to settle in new environments</li>
      </ul>

      <p>
        Environment shapes performance. A horse that feels comfortable,
        safe, and understood is a horse that performs at its best.
      </p>

    </Layout>
  );
}

import Nav from '../components/Nav';
import Layout from '../components/Layout';
import TOC from '../components/TOC';
import SectionNav from '../components/SectionNav';
import { styles } from '../components/styles';

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

      <h1 style={styles.h1}>Environment & Stress</h1>
      <p style={styles.paragraph}>
        A horse’s environment shapes everything — movement, hydration, behavior, soundness,
        and recovery. Understanding environmental stressors helps prevent issues before they
        become problems.
      </p>

      <h2 id="weather" style={styles.h2}>Weather Shifts</h2>
      <ul style={styles.list}>
        <li><strong>Cold snaps:</strong> stiffness, longer warm-up times</li>
        <li><strong>Heat waves:</strong> dehydration, reduced performance</li>
        <li><strong>High humidity:</strong> harder cooling</li>
        <li><strong>Windy days:</strong> increased alertness or spookiness</li>
      </ul>

      <h2 id="footing" style={styles.h2}>Ground & Footing</h2>
      <ul style={styles.list}>
        <li><strong>Deep footing:</strong> tendon strain risk</li>
        <li><strong>Hard footing:</strong> joint concussion</li>
        <li><strong>Uneven ground:</strong> missteps or rolled ankles</li>
        <li><strong>Slick footing:</strong> muscle guarding, hesitation</li>
      </ul>

      <h2 id="hauling" style={styles.h2}>Hauling & Travel Stress</h2>
      <ul style={styles.list}>
        <li>Offer water frequently</li>
        <li>Check legs after unloading</li>
        <li>Expect 12–24 hours of fatigue after long haul</li>
        <li>Monitor manure and appetite closely</li>
      </ul>

      <h2 id="routine" style={styles.h2}>Routine Disruptions</h2>
      <ul style={styles.list}>
        <li>New turnout groups</li>
        <li>Feeding schedule changes</li>
        <li>Stall relocations</li>
        <li>New handlers or caretakers</li>
      </ul>

      <h2 id="show" style={styles.h2}>Show Environment Stress</h2>
      <ul style={styles.list}>
        <li>Loudspeakers, sudden noise</li>
        <li>Crowded warm-up pens</li>
        <li>New or deep footing</li>
        <li>Travel fatigue or unfamiliar surroundings</li>
      </ul>

      <h2 id="barn" style={styles.h2}>Barn Environment Red Flags</h2>
      <ul style={styles.list}>
        <li>Ammonia smell → respiratory irritation</li>
        <li>Poor ventilation → dust, moisture buildup</li>
        <li>Stagnant or dirty water sources</li>
        <li>Chaotic routines → anxious horses</li>
      </ul>

      <h2 id="behavior" style={styles.h2}>Behavioral Stress Indicators</h2>
      <ul style={styles.list}>
        <li>Increased tension through jaw or poll</li>
        <li>Shorter stride or reluctance to step under</li>
        <li>Reduced appetite</li>
        <li>Noticeable irritability during grooming</li>
      </ul>

      <h2 id="reduce" style={styles.h2}>How to Reduce Stress</h2>
      <ul style={styles.list}>
        <li>Maintain consistent routines</li>
        <li>Ensure access to clean water</li>
        <li>Allow settling time in new environments</li>
        <li>Lower workload during extreme weather</li>
        <li>Use predictable warm-up and cool-down patterns</li>
      </ul>

      <SectionNav
        prev={{ href: '/skin-and-legs', label: 'Skin & Legs' }}
        next={{ href: '/quick-reference', label: 'Quick Reference' }}
      />
    </Layout>
  );
}

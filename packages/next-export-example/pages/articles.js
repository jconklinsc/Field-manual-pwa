import Layout from '../components/Layout';

const ARTICLES = [
  {
    id: 'morning-baseline-walkthrough',
    title: 'Morning Baseline Walkthrough',
    body: [
      'A consistent baseline starts with a calm, repeatable routine. Begin each day with a quiet two-minute scan: posture, breathing rhythm, appetite, and demeanor. This creates a daily reference point so subtle changes stand out before they become urgent.',
      'Move from head to tail using the same sequence every time. Check eyes, nostrils, gums, and hydration, then continue down the neck and shoulders. Run your hands along each leg for heat or swelling, and compare left to right.',
      'Finish by logging water intake, manure consistency, and any changes in turnout or workload. A short, straight-line walk completes the picture. The goal is to capture what “normal” looks like today so tomorrow’s changes are easy to spot.'
    ]
  },
  {
    id: 'hands-on-body-map',
    title: 'Hands-On Body Map',
    body: [
      'A hands-on body map is the fastest way to catch tightness early. Use steady pressure and follow a consistent path—poll to shoulder, shoulder to back, back to hindquarters, then down each leg.',
      'When you find an area of heat or sensitivity, pause and compare to the opposite side. Small differences matter more than dramatic changes. Note any reactions, muscle twitching, or guarding.',
      'Record what you find so you can compare day-to-day. Short notes like “left shoulder tight, improved after turnout” build a clear history that helps you decide when to rest, adjust work, or call for help.'
    ]
  },
  {
    id: 'daily-movement-snapshot',
    title: 'Daily Movement Snapshot',
    body: [
      'Movement checks are about rhythm, symmetry, and willingness. Watch a straight line away, a straight line toward, and a loose circle. Keep the pace slow enough to see footfall timing.',
      'Look for shortened stride, toe drag, head bob, or reluctance to turn. Compare left-to-right and note whether the back swings freely or stays tight.',
      'Log what you see and pair it with the day’s work. Over time, you’ll recognize patterns between footing, workload, and how the horse moves the next day.'
    ]
  },
  {
    id: 'hydration-feed-check',
    title: 'Hydration & Feed Check',
    body: [
      'Hydration and feed are early warning systems. Check water buckets, note salt consumption, and observe appetite. Sudden changes here can signal stress or discomfort before movement changes appear.',
      'Use a skin pinch to estimate hydration, check gums for moisture and color, and observe manure consistency. These details matter most when compared to yesterday’s normal.',
      'Document changes right away. A quick note like “water down, manure dry” helps you track trends and respond early.'
    ]
  },
  {
    id: 'when-something-feels-off',
    title: 'When Something Feels Off',
    body: [
      'When a horse feels “off,” slow the moment down. Compare today’s baseline to yesterday’s, and isolate what changed—movement, appetite, demeanor, or heat.',
      'Use a short checklist: check legs, check hooves, check tack fit, then confirm vital signs if you have them. Small clues often combine into a clear picture.',
      'Log specifics and decide on next steps: rest, light work, or call for help. Detailed notes improve decision-making and shorten recovery time.'
    ]
  },
  {
    id: 'mental-readiness-check',
    title: 'Mental Readiness Check',
    body: [
      'Before you tack up, check mental readiness. Watch eyes, ears, breathing, and the overall tone of the horse. A calm mind protects the body.',
      'Small stress signals include pinned ears, tail swishing, or an unwillingness to stand. If you see these, pause and slow your own energy first.',
      'Use grooming and short hand-walks to reset. The goal is to ensure the horse is mentally settled before asking for work.'
    ]
  },
  {
    id: 'body-scan-flexion',
    title: 'Body Scan + Flexion',
    body: [
      'A pre-ride body scan catches tightness before it becomes soreness. Run your hands down the neck, shoulders, back, and hindquarters using steady, even pressure.',
      'Gently flex each joint and compare side to side. You are looking for resistance, heat, or a reduction in range of motion.',
      'If something feels off, log it and adjust the plan. Light work or a slow warm-up can prevent a small issue from escalating.'
    ]
  },
  {
    id: 'limb-joint-assessment',
    title: 'Limb & Joint Assessment',
    body: [
      'Assess limbs before every ride, especially after hard work or footing changes. Check for heat, swelling, or tenderness along tendons and joints.',
      'Use a short straight line to watch the horse walk. Compare steps side to side and look for subtle unevenness.',
      'If you notice changes, log them immediately and adjust training. Consistent notes help you correlate workload and recovery.'
    ]
  },
  {
    id: 'cool-down-sequence',
    title: 'Cool-Down Sequence',
    body: [
      'Cooling down is an extension of training. Walk until respiration normalizes and the skin feels cool to the touch. Offer a loose rein stretch to help the back relax.',
      'Check heart rate recovery within ten minutes, offer water, and observe for any post-ride stiffness.',
      'Log anything unusual. A consistent cool-down routine keeps recovery predictable and helps you spot subtle issues early.'
    ]
  },
  {
    id: 'legs-hooves-and-heat',
    title: 'Legs, Hooves, and Heat',
    body: [
      'Post-ride leg checks prevent missed heat or swelling. Use your hands to confirm even temperature in all four legs.',
      'Feel digital pulses at the fetlock. A pounding pulse or localized heat can indicate inflammation.',
      'If heat is localized, cold hose and log it. Follow up the next morning to confirm changes.'
    ]
  },
  {
    id: 'next-day-readiness',
    title: 'Next-Day Readiness',
    body: [
      'The next-day check is your feedback loop. Repeat the baseline scan and compare how the horse feels versus the day before.',
      'Notice whether appetite, movement, or demeanor shifted. If yesterday’s work created soreness, adjust workload accordingly.',
      'Record the comparison. Over time, this becomes a reliable map for training and recovery.'
    ]
  },
  {
    id: 'weather-shifts',
    title: 'Weather Shifts',
    body: [
      'Weather changes affect movement, hydration, and energy. Cold snaps tighten muscles, while humidity can dull energy and increase recovery time.',
      'Adjust warm-ups, turnout, and hydration based on the forecast. Track electrolytes in hotter weather.',
      'Log weather notes alongside work so you can see how temperature shifts correlate with performance.'
    ]
  },
  {
    id: 'footing-and-terrain',
    title: 'Footing and Terrain',
    body: [
      'Footing influences strain and recovery. Deep footing builds strength but strains tendons. Hard ground increases concussion.',
      'Note the surface used for each ride—arena, trails, grass, or hard pack—and how the horse felt afterward.',
      'Tracking footing helps you identify patterns and reduce repetitive strain.'
    ]
  },
  {
    id: 'routine-changes',
    title: 'Routine Changes',
    body: [
      'Routine changes often show up in appetite or behavior first. New hay, travel, or pasture mates can impact mood and recovery.',
      'When a routine shift happens, note it right away and monitor vital signs if you track them.',
      'Short logs around routine changes help you identify what is normal versus what needs attention.'
    ]
  },
  {
    id: 'heat-or-swelling-in-a-leg',
    title: 'Heat or Swelling in a Leg',
    body: [
      'Stop and assess immediately. Compare both legs for heat, swelling, and tenderness.',
      'If swelling is sudden or focal heat appears, reduce workload and cold hose. Keep movement gentle unless the horse is unsound.',
      'Document what you see and reassess within 24 hours. Quick notes improve veterinary decisions if needed.'
    ]
  },
  {
    id: 'horse-feels-off-under-saddle',
    title: 'Horse Feels Off Under Saddle',
    body: [
      'Pause the ride and check tack placement, saddle balance, and hoof comfort. Small tack issues often show up as resistance or unevenness.',
      'If the horse remains off, dismount and check movement in-hand. Compare left and right.',
      'Log the details so you can track if the issue resolves with rest or a change in equipment.'
    ]
  },
  {
    id: 'when-to-call-for-help',
    title: 'When to Call for Help',
    body: [
      'Call for help when pain is persistent, lameness is sudden, or vital signs are abnormal. Severe colic signs or non-weight-bearing lameness require immediate attention.',
      'Have your notes ready: time, symptoms, recent workload, and any changes in routine. This speeds up the care plan.',
      'When in doubt, call. Early intervention is always easier than waiting.'
    ]
  },
  {
    id: 'daily-leg-inspection',
    title: 'Daily Leg Inspection',
    body: [
      'Leg checks should be consistent and methodical. Start at the hoof and work upward, comparing left and right.',
      'Look for heat, swelling, scabs, or new hair loss. Pay attention to sensitivity when you run your hands down tendons.',
      'Small notes like “puffy left fetlock after stall” make it easy to identify patterns.'
    ]
  },
  {
    id: 'digital-pulse-check',
    title: 'Digital Pulse Check',
    body: [
      'Digital pulse checks are a simple way to spot inflammation. Place your fingers lightly at the fetlock and feel for a pulse.',
      'A bounding pulse can be a sign of hoof inflammation or pain. Compare left and right every time.',
      'If a pulse feels strong or uneven, log it and monitor for heat or lameness.'
    ]
  },
  {
    id: 'skin-health-rain-and-recovery',
    title: 'Skin Health, Rain, and Recovery',
    body: [
      'Wet weather can lead to scratches, rain rot, and pastern irritation. Keep legs dry, clip excess hair, and monitor for crusting.',
      'Check for new scabs, flaky patches, or changes in coat texture. Early care prevents spread.',
      'Log treatment dates and watch for improvement so you can track what works.'
    ]
  },
  {
    id: 'hoof-signals',
    title: 'Hoof Signals',
    body: [
      'Hoof heat after work can be normal, but a pounding pulse or uneven heat is not.',
      'Keep farrier cycles consistent and record any changes in hoof balance or wear.',
      'Use a quick note whenever hoof heat shows up so you can compare to workload and footing.'
    ]
  },
  {
    id: 'field-notes-that-matter',
    title: 'Field Notes That Matter',
    body: [
      'The most useful notes are short and specific. Record what changed, when it happened, and how you responded.',
      'Pair notes with dates so you can track how rest, turnout, or treatment affected the outcome.',
      'This history becomes invaluable when you need to make decisions quickly.'
    ]
  },
  {
    id: 'why-save-favorites',
    title: 'Why Save Favorites?',
    body: [
      'Favorites act as a curated quick-reference list. Save the pages you use most often or the guidance you reach for in a hurry.',
      'When something feels off, you can jump straight to the right checklist without searching.',
      'A short list of favorites keeps important information at your fingertips.'
    ]
  },
  {
    id: 'stay-ahead-of-the-calendar',
    title: 'Stay Ahead of the Calendar',
    body: [
      'Scheduling vet and farrier visits keeps your routine steady and reduces last-minute stress.',
      'Add the horse name, visit type, and timing, then set a reminder window so you can prepare ahead of time.',
      'Use the notes field to track prep steps like clean legs, hoof picks, or diet changes.'
    ]
  },
  {
    id: 'how-to-use-the-terms-library',
    title: 'How to Use the Terms Library',
    body: [
      'The terms library is a quick reference when you need precise language. Use it while logging notes or speaking with a vet.',
      'The more specific you are, the easier it is to track patterns and explain symptoms.',
      'Keep the library open during checks so you can match what you see to the right term.'
    ]
  },
  {
    id: 'build-a-record',
    title: 'Build a Record',
    body: [
      'Start by adding each horse by name. Once a horse is added, log small updates regularly so the timeline stays useful.',
      'Short notes after daily care or rides build a clear history without taking much time.',
      'Consistency beats length—the goal is a simple record you can trust.'
    ]
  },
  {
    id: 'build-a-living-timeline',
    title: 'Build a Living Timeline',
    body: [
      'A living timeline shows trends across weeks and months. Small changes become obvious when entries are consistent.',
      'Log short updates after checks, rides, or treatments. Over time, you’ll see what helps and what makes things worse.',
      'Use the timeline to guide workload adjustments and care decisions.'
    ]
  },
  {
    id: 'log-like-a-pro',
    title: 'Log Like a Pro',
    body: [
      'Great logs are short, clear, and repeatable. Include the section, the observation, and the response.',
      'Add the date and time so patterns are easy to trace. If you can, include a short video or photo reference.',
      'A clean log makes it easy to identify what changes helped the most.'
    ]
  },
  {
    id: 'how-to-use-the-products-guide',
    title: 'How to Use the Products Guide',
    body: [
      'This guide highlights what each Draw It Out product helps with and how to use it during daily care.',
      'Follow label instructions for exact timing and precautions, and log any responses so you can see what works best.',
      'Use the product notes alongside your daily checks to keep treatments consistent.'
    ]
  }
];

export default function Articles() {
  return (
    <Layout>
      <h1>In-Depth Articles</h1>
      <p>
        Full-length guidance for daily care, training readiness, recovery, and
        on-the-spot decisions.
      </p>
      <nav
        style={{
          marginTop: '16px',
          padding: '12px',
          borderRadius: '12px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <strong>Jump to:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
          {ARTICLES.map(article => (
            <a
              key={article.id}
              href={`#${article.id}`}
              style={{ color: '#2a241d', fontSize: '13px' }}
            >
              {article.title}
            </a>
          ))}
        </div>
      </nav>

      <div style={{ marginTop: '24px', display: 'grid', gap: '18px' }}>
        {ARTICLES.map(article => (
          <section
            key={article.id}
            id={article.id}
            style={{
              padding: '18px',
              borderRadius: '16px',
              border: '1px solid #e6d9c8',
              background: '#fffaf4'
            }}
          >
            <h2 style={{ marginTop: 0 }}>{article.title}</h2>
            {article.body.map((paragraph, idx) => (
              <p key={idx} style={{ color: '#4a4036', lineHeight: 1.7 }}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </Layout>
  );
}

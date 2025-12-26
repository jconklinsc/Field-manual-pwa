import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';

const makeId = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const TERM_SECTIONS = [
  {
    title: 'Vitals & Body Systems',
    terms: [
      {
        term: 'TPR (Temperature, Pulse, Respiration)',
        definition:
          'Core vital signs used to establish baseline health and spot early illness.'
      },
      {
        term: 'Capillary Refill Time (CRT)',
        definition:
          'Time for gums to return to pink after pressure; normal is about 1–2 seconds.'
      },
      {
        term: 'Mucous Membranes',
        definition:
          'Gum color and moisture that reflect hydration, circulation, and oxygenation.'
      },
      {
        term: 'Respiratory Rate',
        definition:
          'Breaths per minute at rest; note flared nostrils or labored breathing.'
      },
      {
        term: 'Heart Rate Recovery',
        definition:
          'How quickly pulse returns to baseline after work; slow recovery can signal fatigue.'
      },
      {
        term: 'Digital Pulse',
        definition:
          'Pulse felt at the fetlock or pastern; bounding pulses can signal hoof inflammation.'
      },
      {
        term: 'Gut Sounds',
        definition:
          'Borborygmi heard in each abdominal quadrant; reduced sounds can indicate colic risk.'
      },
      {
        term: 'Skin Turgor',
        definition:
          'Skin pinch hydration check; slow snap-back suggests dehydration.'
      },
      {
        term: 'Hydration Status',
        definition:
          'Overall fluid balance assessed by gum moisture, skin turgor, and manure consistency.'
      },
      {
        term: 'Temperature Trend',
        definition:
          'Pattern of daily temperatures; a slow climb can be an early illness indicator.'
      },
      {
        term: 'Respiratory Effort',
        definition:
          'Work of breathing at rest; increased effort signals stress or respiratory compromise.'
      }
    ]
  },
  {
    title: 'Movement & Lameness',
    terms: [
      {
        term: 'Head Bob',
        definition:
          'Up-and-down motion that can indicate forelimb lameness.'
      },
      {
        term: 'Short Stride',
        definition:
          'Reduced limb reach or step length, often linked to pain or stiffness.'
      },
      {
        term: 'Toe Drag',
        definition:
          'Dragging toes during swing phase; can signal fatigue, soreness, or neurologic issues.'
      },
      {
        term: 'Uneven Tracking',
        definition:
          'Hind feet not stepping into the front hoof prints, suggesting asymmetry.'
      },
      {
        term: 'Reluctance to Bend',
        definition:
          'Resistance on turns that can point to back, shoulder, or hip discomfort.'
      },
      {
        term: 'Warmth vs. Heat',
        definition:
          'Mild warmth can be normal after work; focal heat with swelling is a red flag.'
      },
      {
        term: 'Grade Lameness',
        definition:
          'Severity scale from subtle (grade 1) to non-weight-bearing (grade 5).'
      },
      {
        term: 'Compensatory Lameness',
        definition:
          'Secondary soreness from shifting weight off the primary injury.'
      },
      {
        term: 'Hind-End Engagement',
        definition:
          'Quality of pushing power behind; reduced engagement can indicate discomfort.'
      },
      {
        term: 'Cross-Canter',
        definition:
          'Different leads front to back; can signal balance or soreness issues.'
      }
    ]
  },
  {
    title: 'Skin, Legs & Hooves',
    terms: [
      {
        term: 'Stocking Up',
        definition:
          'Diffuse lower-leg swelling from standing still; should resolve with movement.'
      },
      {
        term: 'Pitting Edema',
        definition:
          'Swelling that leaves a dent when pressed, indicating fluid accumulation.'
      },
      {
        term: 'Thrush',
        definition:
          'Fungal/bacterial infection of the frog with a foul odor and black discharge.'
      },
      {
        term: 'Cracked Heel',
        definition:
          'Skin fissures in the heel bulbs; often linked to wet conditions or irritation.'
      },
      {
        term: 'Proud Flesh',
        definition:
          'Excess granulation tissue in a wound that can slow healing.'
      },
      {
        term: 'Hoof Balance',
        definition:
          'Symmetry of the hoof wall and sole that supports even loading and movement.'
      },
      {
        term: 'White Line Disease',
        definition:
          'Separation and infection along the hoof wall/sole junction.'
      },
      {
        term: 'Scratches (Mud Fever)',
        definition:
          'Crusty inflammation on pasterns, often from wet conditions or bacteria.'
      },
      {
        term: 'Frog Health',
        definition:
          'Condition of the frog tissue; soft or ragged frog suggests moisture or infection.'
      },
      {
        term: 'Sole Bruise',
        definition:
          'Tenderness in the sole, often from hard ground or stone impact.'
      }
    ]
  },
  {
    title: 'Digestive & Metabolic Health',
    terms: [
      {
        term: 'Colic',
        definition:
          'General term for abdominal pain with many causes; monitor closely.'
      },
      {
        term: 'Impaction',
        definition:
          'Blockage in the digestive tract, often due to dehydration or low motility.'
      },
      {
        term: 'Gas Colic',
        definition:
          'Pain from gas buildup; may show frequent rolling or flank watching.'
      },
      {
        term: 'Metabolic Syndrome',
        definition:
          'Insulin dysregulation tied to easy weight gain and laminitis risk.'
      },
      {
        term: 'Ulcers',
        definition:
          'Gastric irritation that may present as poor appetite, girthiness, or attitude change.'
      },
      {
        term: 'Manure Consistency',
        definition:
          'Dry, hard balls or loose stool can indicate hydration or diet issues.'
      },
      {
        term: 'Feed Sensitivity',
        definition:
          'Digestive response to new hay or grain; track changes when feeds shift.'
      },
      {
        term: 'Slow Feeder Impact',
        definition:
          'How hay nets or slow feeders affect eating pace and hydration.'
      }
    ]
  },
  {
    title: 'Behavior, Appetite & Attitude',
    terms: [
      {
        term: 'Baseline Demeanor',
        definition:
          'Your horse’s normal attitude and energy; changes are early warning signs.'
      },
      {
        term: 'Anorexia/Inappetence',
        definition:
          'Reduced or absent appetite; can precede illness, pain, or GI upset.'
      },
      {
        term: 'Guarding',
        definition:
          'Protective behavior around a painful area during grooming or palpation.'
      },
      {
        term: 'Bruxism',
        definition:
          'Teeth grinding that can indicate pain or gastric discomfort.'
      },
      {
        term: 'Colic Behaviors',
        definition:
          'Pawing, looking at the flank, rolling, or restlessness linked to abdominal pain.'
      },
      {
        term: 'Stiffness vs. Soreness',
        definition:
          'Stiffness eases with warm-up; soreness often worsens with movement.'
      },
      {
        term: 'Change in Appetite',
        definition:
          'Reduced interest in feed or water that can signal pain, stress, or illness.'
      },
      {
        term: 'Over-Alertness',
        definition:
          'Unusually heightened reactivity that can be tied to discomfort or environmental stress.'
      }
    ]
  },
  {
    title: 'Hoof Care & Farrier',
    terms: [
      {
        term: 'Trim Cycle',
        definition:
          'Regular schedule for balancing the hoof; consistent cycles support soundness.'
      },
      {
        term: 'Heel Support',
        definition:
          'Balance in the heel area that keeps the foot landing evenly.'
      },
      {
        term: 'Toe Length',
        definition:
          'Length of the toe; long toes can strain tendons and delay breakover.'
      },
      {
        term: 'Breakover',
        definition:
          'The moment the hoof leaves the ground; delayed breakover adds strain.'
      }
    ]
  },
  {
    title: 'Conditioning & Performance',
    terms: [
      {
        term: 'Warm-Up Duration',
        definition:
          'Time spent at low intensity to prepare muscles and joints for work.'
      },
      {
        term: 'Recovery Window',
        definition:
          'Time needed for heart rate and breathing to normalize post-ride.'
      },
      {
        term: 'Workload Spike',
        definition:
          'Sudden increase in intensity or duration that can raise injury risk.'
      },
      {
        term: 'Deload Week',
        definition:
          'Planned lighter week to allow tissues to recover and adapt.'
      }
    ]
  },
  {
    title: 'Pain & Inflammation',
    terms: [
      {
        term: 'Localized Heat',
        definition:
          'Heat confined to a specific area, often indicating inflammation or injury.'
      },
      {
        term: 'Diffuse Swelling',
        definition:
          'Widespread swelling that can suggest fluid retention or systemic issues.'
      },
      {
        term: 'Palpation Response',
        definition:
          'Reaction when pressure is applied to a muscle or joint; sharp response suggests pain.'
      },
      {
        term: 'Anti-Inflammatory Response',
        definition:
          'Observed change after cold therapy or rest; track to confirm improvement.'
      }
    ]
  },
  {
    title: 'Recovery & Risk Flags',
    terms: [
      {
        term: 'Delayed Recovery',
        definition:
          'Heart rate or breathing stays elevated after work, signaling fatigue or overheating.'
      },
      {
        term: 'Heat Stress',
        definition:
          'Overheating with heavy sweating or rapid breathing; requires rapid cooling.'
      },
      {
        term: 'Laminitis Risk',
        definition:
          'Signs include bounding digital pulse, hot hooves, and reluctance to move.'
      },
      {
        term: 'Acute Swelling',
        definition:
          'Rapid swelling with heat and pain; treat as urgent and reduce workload.'
      },
      {
        term: 'Neurologic Red Flags',
        definition:
          'Ataxia, stumbling, or abnormal stance that requires immediate vet evaluation.'
      },
      {
        term: 'Swelling That Spreads',
        definition:
          'Rapidly enlarging swelling moving up a limb can indicate infection.'
      },
      {
        term: 'Fever',
        definition:
          'Elevated temperature paired with lethargy or poor appetite signals illness.'
      },
      {
        term: 'When to Call the Vet',
        definition:
          'Persistent pain, severe colic signs, or sudden lameness require prompt help.'
      }
    ]
  },
  {
    title: 'Wounds & First Aid',
    terms: [
      {
        term: 'Laceration',
        definition:
          'A cut that may involve skin, muscle, or deeper tissue; assess depth and bleeding.'
      },
      {
        term: 'Puncture Wound',
        definition:
          'Small entry with deep damage risk; clean and consult a vet quickly.'
      },
      {
        term: 'Bandage Pressure',
        definition:
          'Even, supportive wrap pressure that avoids pressure points or swelling above.'
      },
      {
        term: 'Cold Therapy',
        definition:
          'Ice or cold hosing to reduce heat and swelling after work or injury.'
      },
      {
        term: 'Granulation',
        definition:
          'Healthy pink tissue during healing; excessive growth becomes proud flesh.'
      }
    ]
  }
];

export default function HorseHealthTerms() {
  return (
    <Layout>
      <h1>Horse Health Terms Library</h1>
      <p>
        A comprehensive glossary of common horse health terms to support daily
        care, observation, and quick decision-making.
      </p>

      <ArticleCard title="How to Use This Library" eyebrow="Daily routine">
        <p>
          Keep this glossary open during checks or while writing notes. Subtle
          changes can be easy to miss, so precise language helps you catch
          patterns early. The more specific you are, the stronger your care plan
          becomes.
        </p>
      </ArticleCard>

      <section
        style={{
          marginTop: '20px',
          padding: '12px',
          borderRadius: '12px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: '8px', color: '#2a241d' }}>
          Jump to a section
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {TERM_SECTIONS.map(section => (
            <a
              key={section.title}
              href={`#${makeId(section.title)}`}
              style={{
                fontSize: '13px',
                color: '#2a241d',
                border: '1px solid #dccfc1',
                borderRadius: '999px',
                padding: '4px 10px',
                background: '#ffffff',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '34px'
              }}
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      {TERM_SECTIONS.map(section => (
        <section
          key={section.title}
          id={makeId(section.title)}
          style={{ marginTop: '24px' }}
        >
          <h2 style={{ marginBottom: '12px' }}>{section.title}</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {section.terms.map(item => (
              <div
                key={item.term}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #e6d9c8',
                  background: '#fffaf4'
                }}
              >
                <div style={{ fontWeight: 600 }}>{item.term}</div>
                <div style={{ fontSize: '14px', color: '#5f584f' }}>
                  {item.definition}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}

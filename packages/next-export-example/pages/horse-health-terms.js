import { useMemo, useState } from 'react';
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
        term: 'Perfusion',
        definition:
          'Blood flow through tissue; poor perfusion can show as cool extremities or slow CRT.'
      },
      {
        term: 'Pain Score',
        definition:
          'Observable indicators of discomfort including posture, expression, and appetite.'
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
        term: 'Ataxia',
        definition:
          'Uncoordinated movement or stumbling that can indicate neurologic involvement.'
      },
      {
        term: 'Stiffness',
        definition:
          'Reduced flexibility or range of motion, often noted after rest or hard work.'
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
        term: 'Digital Cushion',
        definition:
          'Shock-absorbing tissue within the hoof that supports soundness.'
      },
      {
        term: 'Laminitis',
        definition:
          'Inflammation of the laminae that can cause hoof pain and rotation.'
      },
      {
        term: 'Scratches (Mud Fever)',
        definition:
          'Crusty inflammation on pasterns, often from wet conditions or bacteria.'
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
        term: 'Soft Tissue Strain',
        definition:
          'Overstretching of muscles or tendons causing soreness and swelling.'
      },
      {
        term: 'Cold Therapy',
        definition:
          'Cold hosing or ice application to reduce heat and inflammation.'
      },
      {
        term: 'Compression Wrap',
        definition:
          'Supportive bandaging used to limit swelling and stabilize soft tissue.'
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
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLowerCase();
  const filteredSections = useMemo(() => {
    if (!normalized) return TERM_SECTIONS;
    return TERM_SECTIONS.map(section => {
      const terms = section.terms.filter(item =>
        item.term.toLowerCase().includes(normalized) ||
        item.definition.toLowerCase().includes(normalized)
      );
      return { ...section, terms };
    }).filter(section => section.terms.length > 0);
  }, [normalized]);

  return (
    <Layout>
      <h1>Horse Health Terms Library</h1>
      <p>
        A comprehensive glossary of common horse health terms to support daily
        care, observation, and quick decision-making.
      </p>

      <ArticleCard
        title="How to Use This Library"
        eyebrow="In-depth article"
        href="/articles#how-to-use-the-terms-library"
      >
        <p>
          Keep this glossary open during checks or while writing notes. The more
          specific you are, the stronger your care plan becomes.
        </p>
      </ArticleCard>

      <section style={{ marginTop: '20px' }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search terms..."
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#fffaf4'
          }}
        />
      </section>

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
          {filteredSections.map(section => (
            <a
              key={section.title}
              href={`#${makeId(section.title)}`}
              style={{
                fontSize: '13px',
                color: '#2a241d',
                border: '1px solid #dccfc1',
                borderRadius: '999px',
                padding: '4px 10px',
                background: '#ffffff'
              }}
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      {filteredSections.map(section => (
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

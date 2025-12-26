import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import ArticleCard from '../components/ArticleCard';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function PreRide() {
  return (
    <Layout>
      <h1>
        Pre-Ride Prep
        <FavoriteToggle id="pre-ride" label="Pre-Ride Prep" />
      </h1>

      <p>
        Horses ride best when their bodies, minds, and tack are in sync. Use
        this checklist-style article to create the same calm rhythm before every
        ride.
      </p>

      <ArticleCard
        id="mental"
        title="Mental Readiness Check"
        eyebrow="Daily routine"
      >
        <p>
          Before you tack up, watch eyes, ears, and breathing. A calm horse is a
          safe, sound ride.
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
          <li>Look for pinned ears, tail swishing, or head tossing.</li>
          <li>Check for unusual startle responses during grooming.</li>
          <li>Take a breath and slow your own energy first.</li>
        </ul>
      </ArticleCard>

      <ArticleCard
        id="hands-on"
        title="Body Scan + Flexion"
        eyebrow="Guide"
      >
        <p>
          Run hands down the neck, shoulders, back, and hindquarters. Flex each
          joint gently and compare side to side for stiffness or tenderness.
        </p>
      </ArticleCard>

      <ArticleCard
        id="limbs"
        title="Limb & Joint Assessment"
        eyebrow="Guide"
      >
        <p>
          Check for heat or swelling along tendons and joints before saddling.
          Walk a short straight line and watch for uneven rhythm or hesitation.
          If a limb feels different, note it and adjust the plan.
        </p>
      </ArticleCard>

      <ArticleCard title="Tack and Fit Audit" eyebrow="Guide">
        <p>
          Confirm saddle balance, girth alignment, and bit placement. Even small
          fit shifts show up as reluctance or uneven movement. If anything feels
          off, log it and swap gear before riding.
        </p>
      </ArticleCard>

      <SectionReminder section="Pre-Ride Prep" days={3} />
      <SmartPrompt section="Pre-Ride Prep" />
      <SectionLogQuickAdd section="Pre-Ride Prep" />
    </Layout>
  );
}

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
        this checklist-style article to create the same calm rhythm before
        every ride.
      </p>

      <section id="mental">
        <ArticleCard
          title="Mental Readiness Check"
          eyebrow="In-depth article"
          href="/articles#mental-readiness-check"
        >
          <p>
            Before you tack up, watch eyes, ears, and breathing. A calm horse is
            a safe, sound ride.
          </p>
          <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
            <li>Look for pinned ears, tail swishing, or head tossing.</li>
            <li>Check for unusual startle responses during grooming.</li>
            <li>Take a breath and slow your own energy first.</li>
          </ul>
        </ArticleCard>
      </section>

      <section id="hands-on">
        <ArticleCard
          title="Body Scan + Flexion"
          eyebrow="In-depth article"
          href="/articles#body-scan-flexion"
        >
          <p>
            Run hands down the neck, shoulders, back, and hindquarters. Flex
            each joint gently and compare side to side.
          </p>
        </ArticleCard>
      </section>

      <section id="limbs">
        <ArticleCard
          title="Limb & Joint Assessment"
          eyebrow="In-depth article"
          href="/articles#limb-joint-assessment"
        >
          <p>
            Check legs for heat, swelling, or tenderness before you saddle. Walk
            a short straight line to confirm even steps.
          </p>
        </ArticleCard>
      </section>

      <section id="weather">
        <ArticleCard
          title="Check the Weather Before You Ride"
          eyebrow="In-depth article"
          href="/articles#check-the-weather-before-you-ride"
        >
          <p>
            Confirm temperature, humidity, and wind before you tack up so you
            can plan warm-up length, hydration, and cool-down time.
          </p>
        </ArticleCard>
      </section>

      <ArticleCard title="Tack and Fit Audit" eyebrow="In-depth article">
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

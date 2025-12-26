import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import ArticleCard from '../components/ArticleCard';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function SkinAndLegs() {
  return (
    <Layout>
      <h1>
        Skin & Legs
        <FavoriteToggle id="skin-and-legs" label="Skin & Legs" />
      </h1>

      <p>
        The earliest clues often show up in skin, legs, and hooves. This guide
        highlights the small signals that prevent bigger setbacks.
      </p>

      <section id="daily-check">
        <ArticleCard
          title="Daily Leg Inspection"
          eyebrow="In-depth article"
          href="/articles#daily-leg-inspection"
        >
          <p>
            Start at the hoof and move up. Compare left and right, and note
            swelling, heat, or stiffness after stall time.
          </p>
          <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
            <li>Compare left to right for heat or thickening.</li>
            <li>Check for scrapes, scabs, or new hair loss.</li>
            <li>Note any sensitivity when you run your hands.</li>
          </ul>
        </ArticleCard>
      </section>

      <section id="digital-pulse">
        <ArticleCard
          title="Digital Pulse Check"
          eyebrow="In-depth article"
          href="/articles#digital-pulse-check"
        >
          <p>
            Feel for an increased digital pulse at the fetlock. A pounding pulse
            can signal inflammation that needs a quick response.
          </p>
        </ArticleCard>
      </section>

      <ArticleCard
        title="Skin Health, Rain, and Recovery"
        eyebrow="In-depth article"
        href="/articles#skin-health-rain-and-recovery"
      >
        <p>
          Wet weather can spark scratches, rain rot, or pastern irritation. Keep
          legs dry, clip excess hair, and watch for flaking or crusting. If you
          see irritation, log location and length so you can track change.
        </p>
      </ArticleCard>

      <ArticleCard
        title="Hoof Signals"
        eyebrow="In-depth article"
        href="/articles#hoof-signals"
      >
        <p>
          Warm hooves after work are common, but a pounding digital pulse or
          uneven heat pattern is not. Keep farrier cycles consistent, especially
          when footing is hard.
        </p>
      </ArticleCard>

      <SectionReminder section="Skin & Legs" days={5} />
      <SmartPrompt section="Skin & Legs" />
      <SectionLogQuickAdd section="Skin & Legs" />
    </Layout>
  );
}

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
        Horses show their earliest clues through skin, legs, and hooves. This
        article digs into the small signals that prevent bigger setbacks.
      </p>

      <ArticleCard title="Daily Leg Inspection" eyebrow="Daily routine">
        <p>
          Start at the hoof and move up. Legs should stay clean and cool when a
          horse is comfortable. If stocking up appears after a stall day,
          prioritize movement.
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
          <li>Compare left to right for heat or thickening.</li>
          <li>Check for scrapes, scabs, or new hair loss.</li>
          <li>Note any sensitivity when you run your hands.</li>
        </ul>
      </ArticleCard>

      <ArticleCard title="Digital Pulse Check" id="digital-pulse" eyebrow="Guide">
        <p>
          Place your fingers lightly at the fetlock to feel the digital pulse.
          A steady, gentle pulse is normal. A strong, bounding pulse paired with
          heat is a signal to slow down and monitor closely.
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
          <li>Compare left to right every time.</li>
          <li>Note any change in heat or tenderness.</li>
          <li>Log the finding with the day’s workload.</li>
        </ul>
      </ArticleCard>

      <ArticleCard title="Skin Health, Rain, and Recovery" eyebrow="Guide">
        <p>
          Wet weather can spark scratches, rain rot, or pastern irritation. Keep
          legs dry, clip excess hair, and watch for flaking or crusting. If you
          see irritation, log location and length so you can track change.
        </p>
      </ArticleCard>

      <ArticleCard title="Hoof Signals" eyebrow="Guide">
        <p>
          Warm hooves after work are common, but a pounding digital pulse or
          uneven heat pattern is not. Keep farrier cycles consistent and shorten
          intervals when footing is hard.
        </p>
      </ArticleCard>

      <SectionReminder section="Skin & Legs" days={5} />
      <SmartPrompt section="Skin & Legs" />
      <SectionLogQuickAdd section="Skin & Legs" />
    </Layout>
  );
}

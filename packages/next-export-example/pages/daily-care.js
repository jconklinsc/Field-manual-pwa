import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import ArticleCard from '../components/ArticleCard';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function DailyCare() {
  return (
    <Layout>
      <h1>
        Daily Care
        <FavoriteToggle id="daily-care" label="Daily Care" />
      </h1>

      <p>
        Horses thrive on steady, repeatable routines. Use this daily care guide
        to lock in baseline observations, catch early changes, and build calm
        confidence in the barn.
      </p>

      <ArticleCard
        id="observation"
        title="Morning Baseline Walkthrough"
        eyebrow="Daily routine"
      >
        <p>
          Start with a two-minute scan: posture, breathing rhythm, appetite, and
          attitude. Note the small shifts before they become big signals.
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
          <li>Check gum moisture and color for hydration and circulation.</li>
          <li>Confirm water intake, manure consistency, and hay leftover.</li>
          <li>Run hands along legs for swelling, heat, or tenderness.</li>
        </ul>
      </ArticleCard>

      <ArticleCard
        id="hands-on"
        title="Hands-On Body Map"
        eyebrow="Guide"
      >
        <p>
          Work methodically from poll to tail. Use a consistent, even touch and
          repeat the same sequence daily so you notice subtle asymmetry.
        </p>
        <p>
          If you find a hot spot, mark it in your log and compare tomorrow. Pair
          the note with a short video so you can track progress.
        </p>
      </ArticleCard>

      <ArticleCard
        id="movement"
        title="Daily Movement Snapshot"
        eyebrow="Guide"
      >
        <p>
          Watch three straight lines: walk away, walk toward, and a loose circle.
          If a stride shortens, flag it. Look for toe drag or hesitation in the
          first 10 steps.
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
          <li>Compare footfalls left vs. right.</li>
          <li>Note if the back swings freely or feels stiff.</li>
          <li>Capture any unevenness in your log.</li>
        </ul>
      </ArticleCard>

      <ArticleCard
        id="hydration"
        title="Hydration & Feed Check"
        eyebrow="Guide"
      >
        <p>
          Hydration and feed intake are early signals. Check water levels, note
          salt use, and confirm appetite before you move into physical checks.
          A small shift in water or manure can show up before movement changes.
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
          <li>Note water bucket levels and refill times.</li>
          <li>Check gums for moisture and color.</li>
          <li>Compare manure consistency to yesterday’s baseline.</li>
        </ul>
      </ArticleCard>

      <ArticleCard
        id="off"
        title="When Something Feels Off"
        eyebrow="Guide"
      >
        <p>
          Pause and compare today’s baseline to yesterday. Look for one clear
          change—appetite, movement, heat, or demeanor—then log it before you
          decide on rest or light work. Specific notes lead to faster answers.
        </p>
      </ArticleCard>

      <SectionReminder section="Daily Care" days={2} />
      <SmartPrompt section="Daily Care" />
      <SectionLogQuickAdd section="Daily Care" />
    </Layout>
  );
}

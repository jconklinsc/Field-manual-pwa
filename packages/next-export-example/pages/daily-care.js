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

      <ArticleCard title="Morning Baseline Walkthrough" eyebrow="Daily routine">
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

      <ArticleCard title="Hands-On Body Map" eyebrow="In-depth article">
        <p>
          Work methodically from poll to tail. Use a consistent, even touch and
          repeat the same sequence daily so you notice subtle asymmetry.
        </p>
        <p>
          If you find a hot spot, mark it in your log and compare tomorrow. Pair
          the note with a short video so you can track progress.
        </p>
      </ArticleCard>

      <ArticleCard title="Daily Movement Snapshot" eyebrow="In-depth article">
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

      <SectionReminder section="Daily Care" days={2} />
      <SmartPrompt section="Daily Care" />
      <SectionLogQuickAdd section="Daily Care" />
    </Layout>
  );
}

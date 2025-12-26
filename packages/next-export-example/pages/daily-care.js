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
        Steady, repeatable routines keep your baseline consistent. Use this
        daily care guide to lock in observations, catch early changes, and
        build calm confidence in the barn.
      </p>

      <section id="observation">
        <ArticleCard
          title="Morning Baseline Walkthrough"
          eyebrow="In-depth article"
          href="/articles#morning-baseline-walkthrough"
        >
          <p>
            Start with a two-minute scan: posture, breathing rhythm, appetite,
            and attitude. Note the small shifts before they become big signals.
          </p>
          <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
            <li>Check gum moisture and color for hydration and circulation.</li>
            <li>Confirm water intake, manure consistency, and hay leftover.</li>
            <li>Run hands along legs for swelling, heat, or tenderness.</li>
          </ul>
        </ArticleCard>
      </section>

      <section id="hands-on">
        <ArticleCard
          title="Hands-On Body Map"
          eyebrow="In-depth article"
          href="/articles#hands-on-body-map"
        >
          <p>
            Work methodically from poll to tail. Use the same sequence daily so
            you notice subtle asymmetry and keep touch pressure consistent.
          </p>
          <p>
            If you find a hot spot, mark it in your log and compare tomorrow.
            Pair the note with a short video so you can track progress.
          </p>
        </ArticleCard>
      </section>

      <section id="movement">
        <ArticleCard
          title="Daily Movement Snapshot"
          eyebrow="In-depth article"
          href="/articles#daily-movement-snapshot"
        >
          <p>
            Watch three straight lines: walk away, walk toward, and a loose
            circle. If a stride shortens, flag it. Look for toe drag or
            hesitation in the first 10 steps.
          </p>
          <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
            <li>Compare footfalls left vs. right.</li>
            <li>Note if the back swings freely or feels stiff.</li>
            <li>Capture any unevenness in your log.</li>
          </ul>
        </ArticleCard>
      </section>

      <section id="hydration">
        <ArticleCard
          title="Hydration & Feed Check"
          eyebrow="In-depth article"
          href="/articles#hydration-feed-check"
        >
          <p>
            Note water intake, salt use, and manure consistency. Changes here
            often show up before attitude or movement shifts.
          </p>
        </ArticleCard>
      </section>

      <section id="off">
        <ArticleCard
          title="When Something Feels Off"
          eyebrow="In-depth article"
          href="/articles#when-something-feels-off"
        >
          <p>
            Pause, compare to yesterday’s baseline, and log the specifics. Small
            details help you decide whether to rest, monitor, or call for help.
          </p>
        </ArticleCard>
      </section>

      <SectionReminder section="Daily Care" days={2} />
      <SmartPrompt section="Daily Care" />
      <SectionLogQuickAdd section="Daily Care" />
    </Layout>
  );
}

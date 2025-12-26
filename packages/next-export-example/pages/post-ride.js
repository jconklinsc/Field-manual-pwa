import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import ArticleCard from '../components/ArticleCard';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function PostRide() {
  return (
    <Layout>
      <h1>
        Post-Ride Recovery
        <FavoriteToggle id="post-ride" label="Post-Ride Recovery" />
      </h1>

      <p>
        Recovery is best when cool-down is unhurried and consistent. Treat
        post-ride care like its own short training session.
      </p>

      <section id="cooldown">
        <ArticleCard
          title="Cool-Down Sequence"
          eyebrow="In-depth article"
          href="/articles#cool-down-sequence"
        >
          <p>
            Walk until respiration normalizes and the skin feels cool to the
            touch. Offer a loose rein stretch to help the back settle.
          </p>
          <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
            <li>Check heart rate recovery within 10 minutes.</li>
            <li>Offer small sips of water before full turnout.</li>
            <li>Note any post-ride stiffness or unevenness.</li>
          </ul>
        </ArticleCard>
      </section>

      <ArticleCard
        title="Legs, Hooves, and Heat"
        eyebrow="In-depth article"
        href="/articles#legs-hooves-and-heat"
      >
        <p>
          Use your hands to confirm even temperature in all four legs. Cold hose
          if heat is localized or swelling is new.
        </p>
      </ArticleCard>

      <section id="next-day">
        <ArticleCard
          title="Next-Day Readiness"
          eyebrow="In-depth article"
          href="/articles#next-day-readiness"
        >
          <p>
            The morning after a workout, repeat the baseline scan. Compare notes
            from today with how they show up tomorrow so you can adjust
            workload.
          </p>
        </ArticleCard>
      </section>

      <SectionReminder section="Post-Ride Recovery" days={3} />
      <SmartPrompt section="Post-Ride Recovery" />
      <SectionLogQuickAdd section="Post-Ride Recovery" />
    </Layout>
  );
}

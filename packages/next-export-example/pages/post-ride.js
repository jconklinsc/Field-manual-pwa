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
        Horses recover best when cool-down is unhurried and consistent. Treat
        post-ride care like its own short training session.
      </p>

      <ArticleCard
        id="cooldown"
        title="Cool-Down Sequence"
        eyebrow="Daily routine"
      >
        <p>
          Walk until respiration normalizes and the skin feels cool to the touch.
          Add extra time after hills and finish with a loose rein stretch to
          settle the back.
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
          <li>Check heart rate recovery within 10 minutes.</li>
          <li>Offer small sips of water before full turnout.</li>
          <li>Note any post-ride stiffness or unevenness.</li>
        </ul>
      </ArticleCard>

      <ArticleCard title="Legs, Hooves, and Heat" eyebrow="Guide">
        <p>
          Use your hands to confirm even temperature in all four legs. Some
          horses hold heat in the hocks or front hooves after fast work. Cold
          hose if heat is localized or swelling is new.
        </p>
      </ArticleCard>

      <ArticleCard id="next-day" title="Next-Day Readiness" eyebrow="Guide">
        <p>
          The morning after a workout, repeat the baseline scan. Compare notes
          from today with how they show up tomorrow so you can adjust workload.
        </p>
      </ArticleCard>

      <SectionReminder section="Post-Ride Recovery" days={3} />
      <SmartPrompt section="Post-Ride Recovery" />
      <SectionLogQuickAdd section="Post-Ride Recovery" />
    </Layout>
  );
}

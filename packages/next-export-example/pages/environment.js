import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import ArticleCard from '../components/ArticleCard';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function Environment() {
  return (
    <Layout>
      <h1>
        Environment & Stress
        <FavoriteToggle id="environment" label="Environment & Stress" />
      </h1>

      <p>
        Horses react to the world around them. Track how weather, footing, and
        routine shifts show up in their bodies and behavior.
      </p>

      <section id="weather">
        <ArticleCard
          title="Weather Shifts"
          eyebrow="In-depth article"
          href="/articles#weather-shifts"
        >
          <p>
            Cold snaps can tighten muscles, and humidity can dull energy. Adjust
            warm-up time, water intake, and workload with the forecast.
          </p>
          <ul style={{ margin: '10px 0 0', paddingLeft: '18px' }}>
            <li>Note temperature swings and wind exposure.</li>
            <li>Plan extra cool-down time in heat.</li>
            <li>Track hydration and electrolytes.</li>
          </ul>
        </ArticleCard>
      </section>

      <section id="footing">
        <ArticleCard
          title="Footing + Terrain"
          eyebrow="In-depth article"
          href="/articles#footing-and-terrain"
        >
          <p>
            Deep footing builds strength but strains tendons. Hard ground
            increases concussion. Log what they worked on so you can connect
            footing with how they felt the next day.
          </p>
        </ArticleCard>
      </section>

      <ArticleCard
        title="Routine Changes"
        eyebrow="In-depth article"
        href="/articles#routine-changes"
      >
        <p>
          Hauling, feed changes, or new pasture mates can impact appetite and
          attitude. Flag any change with a quick note and check TPR twice that
          day.
        </p>
      </ArticleCard>

      <SectionReminder section="Environment & Stress" days={7} />
      <SmartPrompt section="Environment & Stress" />
      <SectionLogQuickAdd section="Environment & Stress" />
    </Layout>
  );
}

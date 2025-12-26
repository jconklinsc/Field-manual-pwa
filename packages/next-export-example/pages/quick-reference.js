import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import ArticleCard from '../components/ArticleCard';
import SectionReminder from '../components/SectionReminder';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function QuickReference() {
  return (
    <Layout>
      <h1>
        Quick Reference
        <FavoriteToggle id="quick-reference" label="Quick Reference" />
      </h1>

      <p>
        When a horse feels “off,” this quick reference keeps decisions clear
        and consistent. Use it as a calm checklist in the moment.
      </p>

      <ArticleCard
        id="leg-heat"
        title="Heat or Swelling in a Leg"
        eyebrow="Daily routine"
      >
        <p>
          Stop, assess, and compare legs side by side. If heat is focal or
          swelling is sudden, reduce workload and cold hose. Follow with gentle
          movement once the area cools down.
        </p>
      </ArticleCard>

      <ArticleCard
        id="off-under-saddle"
        title="Horse Feels Off Under Saddle"
        eyebrow="Guide"
      >
        <p>
          Pause the ride. Check feet, tack placement, and back sensitivity. If
          the issue persists, dismount and log what you feel. Patterns show up
          quickly when you write them down.
        </p>
      </ArticleCard>

      <ArticleCard title="When to Call for Help" eyebrow="Guide">
        <p>
          Call the vet for persistent pain, severe colic signs, or sudden
          non-weight-bearing lameness. Note time, symptoms, and any changes in
          TPR to speed up care.
        </p>
      </ArticleCard>

      <SectionReminder section="Quick Reference" days={7} />
      <SmartPrompt section="Quick Reference" />
      <SectionLogQuickAdd section="Quick Reference" />
    </Layout>
  );
}

import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';
import SmartPrompt from '../components/SmartPrompt';
import SectionLogQuickAdd from '../components/SectionLogQuickAdd';

export default function SkinAndLegs() {
  return (
    <Layout>
      <h1>
        Skin & Legs
        <FavoriteToggle id="skin-and-legs" label="Skin & Legs" />
      </h1>

      <p>Early indicators before issues become problems.</p>

      <SmartPrompt section="Skin & Legs" />

      <SectionLogQuickAdd section="Skin & Legs" />
    </Layout>
  );
}

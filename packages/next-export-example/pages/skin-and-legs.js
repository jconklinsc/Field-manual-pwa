import Layout from '../components/Layout';
import FavoriteToggle from '../components/FavoriteToggle';

export default function SkinAndLegs() {
  return (
    <Layout>
      <h1>
        Skin & Legs
        <FavoriteToggle id="skin-and-legs" label="Skin & Legs" />
      </h1>

      <p>
        Early indicators, swelling checks, and skin condition awareness.
      </p>
    </Layout>
  );
}

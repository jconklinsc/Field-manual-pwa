export default function Nav() {
  return (
    <nav
      style={{
        marginBottom: '24px',
        fontSize: '16px',
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}
    >
      <a
        href="/"
        className="pill-button"
      >
        Home
      </a>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="pill-button"
      >
        Back
      </button>
    </nav>
  );
}

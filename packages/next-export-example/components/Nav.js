export default function Nav() {
  return (
    <nav style={{
      marginBottom: '24px',
      fontSize: '16px',
      display: 'flex',
      gap: '16px'
    }}>
      <a
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '8px 14px',
          borderRadius: '999px',
          border: '1px solid #dccfc1',
          background: '#f1e6d9',
          color: '#2a241d',
          fontWeight: 600,
          textDecoration: 'none'
        }}
      >
        Home
      </a>
      <button
        type="button"
        onClick={() => window.history.back()}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '8px 14px',
          borderRadius: '999px',
          border: '1px solid #dccfc1',
          background: '#f1e6d9',
          color: '#2a241d',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        Back
      </button>
    </nav>
  );
}

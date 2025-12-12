export default function Nav() {
  return (
    <nav style={{
      marginBottom: '24px',
      fontSize: '16px',
      display: 'flex',
      gap: '16px'
    }}>
      <a href="/" style={{ textDecoration: 'underline' }}>Home</a>
      <a href="javascript:history.back()" style={{ textDecoration: 'underline' }}>Back</a>
    </nav>
  );
}


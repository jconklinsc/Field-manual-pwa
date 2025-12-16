import Link from 'next/link';

export default function Drawer() {
  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#0f1111',
        borderTop: '1px solid #222',
        padding: '10px 12px',
        display: 'flex',
        justifyContent: 'space-around',
        zIndex: 1000
      }}
    >
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>

      <Link href="/daily-care">
        <a style={linkStyle}>Daily</a>
      </Link>

      <Link href="/notes">
        <a style={linkStyle}>Notes</a>
      </Link>

      <Link href="/favorites">
        <a style={linkStyle}>Saved</a>
      </Link>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 500
};

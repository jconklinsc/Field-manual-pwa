import Link from 'next/link';

export default function Drawer() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#111',
        borderTop: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        zIndex: 1000,
      }}
    >
      <Link href="/"><a style={link}>Home</a></Link>
      <Link href="/daily-care"><a style={link}>Daily</a></Link>
      <Link href="/environment"><a style={link}>Environment</a></Link>
      <Link href="/notes"><a style={link}>Notes</a></Link>
    </div>
  );
}

const link = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
};

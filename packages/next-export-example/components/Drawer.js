import Link from 'next/link';

export default function Drawer() {
  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '64px',              // ✅ explicit height
        background: '#0f1111',
        borderTop: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1000,
        pointerEvents: 'auto',       // ✅ explicitly clickable
      }}
    >
      <NavLink href="/" label="Home" />
      <NavLink href="/daily-care" label="Daily" />
      <NavLink href="/environment" label="Environment" />
      <NavLink href="/notes" label="Notes" />
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <Link href={href}>
      <a
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        {label}
      </a>
    </Link>
  );
}

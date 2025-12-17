import Link from 'next/link';

export default function Drawer() {
  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '64px',
        background: '#0f1111',
        borderTop: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1000,

        // 🔑 THIS IS THE KEY
        pointerEvents: 'none',
      }}
    >
      <NavItem href="/" label="Home" />
      <NavItem href="/daily-care" label="Daily" />
      <NavItem href="/environment" label="Environment" />
      <NavItem href="/notes" label="Notes" />
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <Link href={href}>
      <a
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 500,

          // 🔑 RE-ENABLE clicks ONLY on the link
          pointerEvents: 'auto',
        }}
      >
        {label}
      </a>
    </Link>
  );
}

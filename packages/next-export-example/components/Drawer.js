import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Drawer() {
  const router = useRouter();

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
        pointerEvents: 'none',
      }}
    >
      <NavItem router={router} href="/" label="Home" />
      <NavItem router={router} href="/daily-care" label="Daily" />
      <NavItem router={router} href="/environment" label="Env" />
      <NavItem router={router} href="/notes" label="Notes" />
      <NavItem router={router} href="/horses" label="Horses" />
    </nav>
  );
}

function NavItem({ router, href, label }) {
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        style={{
          pointerEvents: 'auto',
          color: isActive ? '#78be20' : '#fff',
          fontWeight: isActive ? 700 : 500,
          fontSize: '14px',
          textDecoration: 'none',
          borderBottom: isActive ? '2px solid #78be20' : 'none',
          paddingBottom: '4px',
        }}
      >
        {label}
      </a>
    </Link>
  );
}

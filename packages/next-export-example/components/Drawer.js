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
        background: '#2a241d',
        borderTop: '1px solid #3a3128',
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
          color: isActive ? '#b6855a' : '#fff',
          fontWeight: isActive ? 700 : 500,
          fontSize: '14px',
          textDecoration: 'none',
          borderBottom: isActive ? '2px solid #b6855a' : 'none',
          padding: '10px 12px',
          borderRadius: '999px',
          minWidth: '64px',
          textAlign: 'center',
        }}
      >
        {label}
      </a>
    </Link>
  );
}

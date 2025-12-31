import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from './Layout';

const NAV_ITEMS = [
  { href: '/account', label: 'Overview' },
  { href: '/account/profile', label: 'Profile & Preferences' },
  { href: '/account/history', label: 'Orders & Activity' },
  { href: '/account/saved', label: 'Saved Items' },
  { href: '/account/support', label: 'Support & Recovery' },
  { href: '/account/security', label: 'Security & Trust' }
];

export default function AccountLayout({ children, description }) {
  const router = useRouter();

  return (
    <Layout>
      <section style={{ marginBottom: '24px' }}>
        <h1 style={{ marginBottom: '8px' }}>Account Area</h1>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          {description ??
            'Review your status, manage preferences, and stay in control of your history.'}
        </p>
      </section>

      <div
        style={{
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'minmax(0, 220px) minmax(0, 1fr)'
        }}
      >
        <nav
          aria-label="Account navigation"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            position: 'sticky',
            top: '24px',
            alignSelf: 'start'
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              router.pathname === item.href ||
              (item.href !== '/account' && router.pathname.startsWith(item.href));

            return (
              <Link href={item.href} key={item.href}>
                <a
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: isActive ? '2px solid #2a241d' : '1px solid #e6d9c8',
                    background: isActive ? '#f1e6d9' : '#fffaf4',
                    color: '#2a241d',
                    fontWeight: isActive ? 700 : 600,
                    textDecoration: 'none',
                    boxShadow: isActive
                      ? '0 8px 16px rgba(42, 36, 29, 0.12)'
                      : 'none'
                  }}
                >
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>

        <div>{children}</div>
      </div>
    </Layout>
  );
}

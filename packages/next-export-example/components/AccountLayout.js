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
      <section className="card-surface" style={{ marginBottom: '24px' }}>
        <h1 style={{ marginBottom: '8px' }}>Account Area</h1>
        <p style={{ marginTop: 0, color: 'var(--app-ink-muted)' }}>
          {description ??
            'Review your status, manage preferences, and stay in control of your history.'}
        </p>
      </section>

      <div className="account-grid">
        <nav aria-label="Account navigation" className="account-nav">
          {NAV_ITEMS.map((item) => {
            const isActive =
              router.pathname === item.href ||
              (item.href !== '/account' && router.pathname.startsWith(item.href));

            return (
              <Link href={item.href} key={item.href}>
                <a
                  className={`account-link${isActive ? ' is-active' : ''}`}
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

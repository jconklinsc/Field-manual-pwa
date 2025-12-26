import Link from 'next/link';
import BackToTop from './BackToTop';

export default function Layout({ children }) {
  const navLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 14px',
    borderRadius: '999px',
    border: '1px solid #dccfc1',
    background: '#f1e6d9',
    color: '#2a241d',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '13px',
    minHeight: '38px'
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6efe6',
        color: '#2a241d',
        padding: '32px 0 64px'
      }}
    >
      <div
        id="top"
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 20px',
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
        }}
      >
        <header
          style={{
            marginBottom: '28px',
            paddingBottom: '14px',
            borderBottom: '1px solid #e4d7c7',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px'
          }}
        >
          <Link href="/">
            <a
              style={{
                fontSize: '22px',
                fontWeight: 700,
                textDecoration: 'none',
                color: '#2a241d'
              }}
            >
              Draw It Out Field Manual
            </a>
          </Link>
          <span style={{ color: '#78be20', fontWeight: 600 }}>
            Care Edition
          </span>
        </header>

        <main>{children}</main>

        <footer
          style={{
            marginTop: '48px',
            paddingTop: '18px',
            borderTop: '1px solid #e4d7c7',
            fontSize: '12px',
            color: '#6b6256'
          }}
        >
          Offline ready · Built for calm, consistent care.
        </footer>
        <BackToTop />
      </div>
    </div>
  );
}

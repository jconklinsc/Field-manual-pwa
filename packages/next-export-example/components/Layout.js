import Link from 'next/link';

export default function Layout({ children }) {
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
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <Link href="/">
            <a
              style={{
                fontSize: '20px',
                fontWeight: 700,
                textDecoration: 'none',
                color: '#2a241d'
              }}
            >
              Field Manual
            </a>
          </Link>
          <span style={{ color: '#78be20', fontWeight: 600 }}>
            Rory + Nudge Edition
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
          Offline ready · Built for calm, consistent care with Rory and Nudge in
          mind.
        </footer>
      </div>
    </div>
  );
}

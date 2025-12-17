import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '24px 16px 56px',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        color: '#0f1111'
      }}
    >
      <header
        style={{
          marginBottom: '24px',
          paddingBottom: '12px',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        <Link href="/">
          <a
            style={{
              fontSize: '18px',
              fontWeight: 600,
              textDecoration: 'none',
              color: '#0f1111'
            }}
          >
            Field Manual
          </a>
        </Link>
      </header>

      <main>{children}</main>

      <footer
        style={{
          marginTop: '40px',
          paddingTop: '16px',
          borderTop: '1px solid #e5e7eb',
          fontSize: '12px',
          color: '#6b7280'
        }}
      >
        Offline ready · Built for daily use
      </footer>
    </div>
  );
}

import Link from 'next/link';
import BackToTop from './BackToTop';

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f8f1ea 0%, #efe6db 100%)',
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
                color: '#2a241d',
                padding: '6px 12px',
                borderRadius: '999px',
                border: '1px solid #dccfc1',
                background: '#fffaf4',
                boxShadow: '0 10px 20px rgba(42, 36, 29, 0.08)'
              }}
            >
              Draw It Out Field Manual
            </a>
          </Link>
        </header>

        <main
          style={{
            background: '#fffaf4',
            borderRadius: '24px',
            padding: '24px',
            border: '1px solid #e6d9c8',
            boxShadow: '0 24px 40px rgba(42, 36, 29, 0.12)',
            fontSize: '16px',
            lineHeight: 1.7
          }}
        >
          {children}
        </main>

        <BackToTop />

        <footer
          style={{
            marginTop: '48px',
            paddingTop: '18px',
            borderTop: '1px solid #e4d7c7',
            fontSize: '12px',
            color: '#6b6256'
          }}
        >
          Offline ready · All content is available offline. Visit{' '}
          <a
            href="https://drawliniment.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '999px',
              border: '1px solid #dccfc1',
              background: '#f1e6d9',
              color: '#2a241d',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            drawliniment.com ↗
          </a>
          .
        </footer>
        <style jsx global>{`
          a,
          button {
            -webkit-tap-highlight-color: rgba(120, 190, 32, 0.2);
          }

          a:active,
          button:active {
            transform: scale(0.98);
          }

          h1 {
            font-size: 28px;
            margin: 0 0 12px;
          }

          h2 {
            font-size: 20px;
            margin: 20px 0 10px;
          }

          h3 {
            font-size: 16px;
            margin: 16px 0 8px;
          }

          p {
            margin: 0 0 12px;
            color: #4a4036;
          }
        `}</style>
      </div>
    </div>
  );
}

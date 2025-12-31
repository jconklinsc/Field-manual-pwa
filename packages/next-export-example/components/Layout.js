import Link from 'next/link';
import BackToTop from './BackToTop';

export default function Layout({ children }) {
  return (
    <div className="app-frame">
      <div id="top" className="app-shell">
        <header className="app-header">
          <Link href="/">
            <a className="app-title">Draw It Out Field Manual</a>
          </Link>
          <span className="app-badge">Care Edition</span>
        </header>

        <main className="app-main">{children}</main>

        <footer className="app-footer">
          <span>Powered by Draw It Out®</span>
          <a
            href="https://drawliniment.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://drawliniment.com
          </a>
        </footer>
        <BackToTop />
      </div>

      <style jsx global>{`
        :root {
          --app-bg: #f7f4ef;
          --app-ink: #221d17;
          --app-ink-muted: #5d5449;
          --app-ink-subtle: #7a7166;
          --app-accent: #2d6b3f;
          --app-surface: #ffffff;
          --app-surface-muted: #f0ebe4;
          --app-border: #e3dbd1;
          --app-shadow: 0 14px 30px rgba(34, 29, 23, 0.08);
          --app-radius: 18px;
          --app-space-xs: 8px;
          --app-space-sm: 12px;
          --app-space-md: 18px;
          --app-space-lg: 28px;
          --app-space-xl: 40px;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: var(--app-bg);
          color: var(--app-ink);
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', sans-serif;
          line-height: 1.65;
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: color 160ms ease;
        }

        a:hover {
          color: var(--app-accent);
        }

        a:focus-visible,
        button:focus-visible {
          outline: 2px solid rgba(45, 107, 63, 0.45);
          outline-offset: 3px;
        }

        h1,
        h2,
        h3 {
          margin: 0 0 12px;
          color: var(--app-ink);
          letter-spacing: -0.01em;
        }

        h1 {
          font-size: clamp(26px, 2.6vw, 32px);
        }

        h2 {
          font-size: clamp(20px, 2vw, 24px);
        }

        h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--app-ink-subtle);
        }

        p {
          margin: 0 0 14px;
          color: var(--app-ink-muted);
        }

        button {
          font-family: inherit;
        }

        .app-frame {
          min-height: 100vh;
          padding: 48px 0 80px;
        }

        .app-shell {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          flex-direction: column;
          gap: var(--app-space-lg);
        }

        .app-header {
          display: flex;
          flex-direction: column;
          gap: var(--app-space-sm);
          padding-bottom: var(--app-space-md);
          border-bottom: 1px solid var(--app-border);
        }

        .app-title {
          font-size: clamp(24px, 2.4vw, 30px);
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .app-badge {
          align-self: flex-start;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(45, 107, 63, 0.12);
          color: var(--app-accent);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.02em;
        }

        .app-main {
          display: flex;
          flex-direction: column;
          gap: var(--app-space-md);
        }

        .app-footer {
          margin-top: var(--app-space-xl);
          padding-top: var(--app-space-md);
          border-top: 1px solid var(--app-border);
          font-size: 12px;
          color: var(--app-ink-subtle);
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
        }

        .pill-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid transparent;
          background: var(--app-surface-muted);
          color: var(--app-ink);
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 10px 20px rgba(34, 29, 23, 0.08);
          transition: transform 160ms ease, box-shadow 160ms ease,
            background 160ms ease;
        }

        .pill-button:hover {
          background: #f4f0ea;
          transform: translateY(-1px);
          box-shadow: 0 14px 26px rgba(34, 29, 23, 0.12);
        }

        .pill-button:active {
          transform: translateY(0);
          box-shadow: 0 8px 16px rgba(34, 29, 23, 0.1);
        }

        .card-surface {
          background: var(--app-surface);
          border: 1px solid rgba(227, 219, 209, 0.7);
          border-radius: var(--app-radius);
          padding: var(--app-space-md);
          box-shadow: var(--app-shadow);
        }

        .account-grid {
          display: grid;
          gap: var(--app-space-lg);
          grid-template-columns: minmax(0, 240px) minmax(0, 1fr);
        }

        @media (max-width: 900px) {
          .app-shell {
            padding: 0 20px;
          }

          .account-grid {
            grid-template-columns: 1fr;
          }
        }

        .account-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: sticky;
          top: 24px;
          align-self: start;
        }

        .account-link {
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid transparent;
          background: var(--app-surface);
          color: var(--app-ink);
          font-weight: 600;
          box-shadow: 0 12px 22px rgba(34, 29, 23, 0.08);
          transition: transform 160ms ease, box-shadow 160ms ease,
            border-color 160ms ease;
        }

        .account-link:hover {
          transform: translateY(-1px);
          border-color: rgba(45, 107, 63, 0.2);
          box-shadow: 0 16px 30px rgba(34, 29, 23, 0.12);
        }

        .account-link.is-active {
          border-color: rgba(45, 107, 63, 0.45);
          background: rgba(45, 107, 63, 0.08);
          color: var(--app-accent);
        }

        .floating-button {
          position: fixed;
          right: 20px;
          bottom: 96px;
          z-index: 1200;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

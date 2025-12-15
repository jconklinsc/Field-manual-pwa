import { useEffect, useState } from 'react';
import Drawer from './Drawer';
import Header from './Header';
import InstallHint from './InstallHint';

export default function Layout({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simple fade/slide-in on mount
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#0f1111',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        paddingBottom: '72px' // room for bottom nav
      }}
    >
      <Drawer />
      <Header />

      <main
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '24px 20px 0',
          lineHeight: 1.65,
          fontSize: '18px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(8px)',
          transition: 'opacity .25s cubic-bezier(0.33,1,0.68,1), transform .25s cubic-bezier(0.33,1,0.68,1)'
        }}
      >
        {children}
      </main>

      {/* Native-style bottom nav bar */}
      <BottomNav />

      {/* iOS install instructions modal */}
      <InstallHint />
    </div>
  );
}

function BottomNav() {
  const navStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '13px',
    textDecoration: 'none',
    color: '#0f1111',
    padding: '4px 0'
  };

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '56px',
        background: '#ffffff',
        borderTop: '1px solid #e5e5e5',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 50
      }}
    >
      <a href="/" style={navStyle}>Home</a>
      <a href="/daily-care" style={navStyle}>Daily</a>
      <a href="/pre-ride" style={navStyle}>Pre</a>
      <a href="/post-ride" style={navStyle}>Post</a>
      <a href="/quick-reference" style={navStyle}>Quick Ref</a>
    </nav>
  );
}

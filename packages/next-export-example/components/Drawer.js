import { useState } from 'react';

export default function Drawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: open ? 'rgba(0,0,0,0.25)' : 'transparent',
          pointerEvents: open ? 'auto' : 'none',
          opacity: open ? 1 : 0,
          transition: 'all .25s cubic-bezier(0.33,1,0.68,1)',
          zIndex: 20
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '260px',
          height: '100%',
          background: '#ffffff',
          padding: '24px',
          boxShadow: '2px 0 12px rgba(0,0,0,0.1)',
          transform: open ? 'translateX(0)' : 'translateX(-110%)',
          transition: 'all .3s cubic-bezier(0.33,1,0.68,1)',
          zIndex: 30,
          fontSize: '18px',
          lineHeight: '1.7'
        }}
      >
        <nav>
          <a href="/" style={link}>Home</a>
          <a href="/daily-care" style={link}>Daily Care</a>
          <a href="/pre-ride" style={link}>Pre-Ride Prep</a>
          <a href="/post-ride" style={link}>Post-Ride Recovery</a>
          <a href="/skin-and-legs" style={link}>Skin & Legs</a>
          <a href="/environment" style={link}>Environment & Stress</a>
          <a href="/quick-reference" style={link}>Quick Reference</a>
        </nav>
      </div>

      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 40,
          background: '#78be20',
          color: '#ffffff',
          padding: '10px 14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          transition: 'all .25s cubic-bezier(0.33,1,0.68,1)',
        }}
      >
        Menu
      </button>
    </>
  );
}

const link = {
  display: 'block',
  marginBottom: '12px',
  color: '#0f1111',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color .2s',
};

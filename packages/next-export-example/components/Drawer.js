import { useState } from 'react';

export default function Drawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Drawer Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 1000,
          padding: '8px 12px',
          background: '#0f1111',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px'
        }}
      >
        Menu
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.4)',
            zIndex: 900
          }}
        />
      )}

      {/* Drawer Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: open ? 0 : '-250px',
          width: '250px',
          height: '100%',
          background: 'white',
          boxShadow: '2px 0 6px rgba(0,0,0,0.2)',
          padding: '24px',
          transition: 'left 0.25s ease',
          zIndex: 1001
        }}
      >
        <h3 style={{ marginTop: 0 }}>Sections</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/daily-care">Daily Care</a></li>
          <li><a href="/pre-ride">Pre-Ride Prep</a></li>
          <li><a href="/post-ride">Post-Ride Recovery</a></li>
          <li><a href="/skin-and-legs">Skin & Legs</a></li>
          <li><a href="/environment">Environment & Stress</a></li>
          <li><a href="/quick-reference">Quick Reference</a></li>
        </ul>
      </div>
    </>
  );
}

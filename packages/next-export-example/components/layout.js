import Drawer from './Drawer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div
      style={{
        padding: '24px',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.75',
        fontSize: '17px',
        color: '#222',
        position: 'relative'
      }}
    >
      {/* Slide-out Navigation Drawer */}
      <Drawer />

      {/* Page Header */}
      <Header />

      {/* Page Content Wrapper */}
      <div style={{ marginTop: '24px' }}>
        {children}
      </div>
    </div>
  );
}

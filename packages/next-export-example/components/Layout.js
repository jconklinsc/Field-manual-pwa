import Drawer from './Drawer';

export default function Layout({ children }) {
  return (
    <div
      style={{
        padding: '24px',
        paddingBottom: '80px', // ✅ prevents Drawer from blocking links
        fontFamily: 'system-ui',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6',
        position: 'relative',
      }}
    >
      {/* Main page content */}
      <main>{children}</main>

      {/* Fixed bottom navigation */}
      <Drawer />
    </div>
  );
}

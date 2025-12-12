import Drawer from './Drawer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div
      style={{
        padding: '24px',
        fontFamily: 'system-ui',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6',
        position: 'relative'
      }}
    >
      {/* Slide-out Navigation Drawer */}
      <Drawer />

      {/* Page Header */}
      <Header />

      {/* Page Content */}
      {children}
    </div>
  );
}

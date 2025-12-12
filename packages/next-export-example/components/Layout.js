import Drawer from './Drawer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#0f1111',
        fontFamily: 'system-ui',
      }}
    >
      <Drawer />
      <Header />

      <main
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '24px 20px 60px',
          lineHeight: 1.65,
          fontSize: '18px'
        }}
      >
        {children}
      </main>
    </div>
  );
}

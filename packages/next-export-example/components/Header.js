export default function Header() {
  return (
    <header
      style={{
        width: '100%',
        padding: '16px 20px',
        background: '#fff',
        borderBottom: '1px solid #e5e5e5',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <h2 
        style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: '700',
          color: '#0f1111'
        }}
      >
        Draw It Out Field Manual
      </h2>
    </header>
  );
}

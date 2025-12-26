export default function TOC({ items }) {
  return (
    <nav style={{ 
      marginBottom: '24px',
      padding: '16px',
      background: '#f7f7f7',
      borderRadius: '8px'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '18px' }}>In This Section</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <a
              href={`#${item.id}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 12px',
                borderRadius: '999px',
                border: '1px solid #dccfc1',
                background: '#f1e6d9',
                color: '#2a241d',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

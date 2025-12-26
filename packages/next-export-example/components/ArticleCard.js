export default function ArticleCard({ title, eyebrow, children }) {
  return (
    <section
      style={{
        marginTop: '18px',
        padding: '18px',
        borderRadius: '16px',
        border: '1px solid #e6d9c8',
        background: '#fffaf4',
        boxShadow: '0 10px 30px rgba(37, 28, 20, 0.08)'
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#5f584f',
            marginBottom: '6px'
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2 style={{ margin: '0 0 8px', fontSize: '20px', color: '#2a241d' }}>
        {title}
      </h2>
      <div
        style={{
          width: '48px',
          height: '3px',
          borderRadius: '999px',
          background: '#78be20',
          marginBottom: '12px'
        }}
      />
      <div style={{ color: '#4a4036', fontSize: '15px', lineHeight: 1.7 }}>
        {children}
      </div>
    </section>
  );
}

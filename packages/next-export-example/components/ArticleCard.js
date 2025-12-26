export default function ArticleCard({ title, eyebrow, children, href }) {
  const Wrapper = href ? 'a' : 'section';

  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      style={{
        display: 'block',
        marginTop: '22px',
        padding: '20px',
        borderRadius: '18px',
        border: '1px solid #e6d9c8',
        background: '#fffaf4',
        boxShadow: '0 16px 30px rgba(37, 28, 20, 0.12)',
        textDecoration: 'none',
        color: 'inherit',
        cursor: href ? 'pointer' : 'default'
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
      {href && (
        <div style={{ marginTop: '14px', fontWeight: 600, color: '#2a241d' }}>
          Open full article →
        </div>
      )}
    </Wrapper>
  );
}

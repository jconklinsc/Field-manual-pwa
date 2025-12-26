export default function SectionNav({ prev, next }) {
  return (
    <div
      style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '16px'
      }}
    >
      {/* Previous */}
      {prev ? (
        <a
          href={prev.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#f1e6d9',
            color: '#2a241d',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          ← {prev.label}
        </a>
      ) : (
        <span />
      )}

      {/* Next */}
      {next ? (
        <a
          href={next.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#f1e6d9',
            color: '#2a241d',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          {next.label} →
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}

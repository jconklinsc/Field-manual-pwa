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
        <a href={prev.href} style={{ textDecoration: 'underline' }}>
          ← {prev.label}
        </a>
      ) : (
        <span />
      )}

      {/* Next */}
      {next ? (
        <a href={next.href} style={{ textDecoration: 'underline' }}>
          {next.label} →
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}

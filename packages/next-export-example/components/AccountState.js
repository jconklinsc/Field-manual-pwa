export default function AccountState({ status, error, onRetry }) {
  if (status === 'loading') {
    return (
      <div
        style={{
          padding: '18px',
          borderRadius: '14px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4',
          color: '#4a4036'
        }}
      >
        Loading your account details...
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div
        style={{
          padding: '18px',
          borderRadius: '14px',
          border: '1px solid #f2c0c0',
          background: '#fff1f1',
          color: '#7a2c2c'
        }}
      >
        <strong>We couldn&apos;t load your account.</strong>
        <p style={{ marginBottom: '12px' }}>
          {error?.message ?? 'Please refresh or try again in a moment.'}
        </p>
        <button
          type="button"
          onClick={onRetry}
          style={{
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #7a2c2c',
            background: '#fff',
            color: '#7a2c2c',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return null;
}

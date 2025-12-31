import AccountLayout from '../../components/AccountLayout';
import AccountState from '../../components/AccountState';
import { formatDateTime, statusTone } from '../../components/accountUtils';
import { useAccountData } from '../../components/useAccountData';

export default function AccountHistory() {
  const { status, data, error, refresh } = useAccountData();

  if (status !== 'success' || !data) {
    return (
      <AccountLayout description="Review your account activity and order history.">
        <AccountState status={status} error={error} onRetry={refresh} />
      </AccountLayout>
    );
  }

  const history = data.history ?? [];

  return (
    <AccountLayout description="Review your account activity and order history.">
      <section
        style={{
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <h2 style={{ marginTop: 0 }}>Orders & activity</h2>
        {history.length === 0 ? (
          <p style={{ margin: 0, color: '#4a4036' }}>
            You don&apos;t have any activity yet. New purchases or exports will appear here so your
            history never disappears.
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
            {history.map((item) => (
              <li
                key={item.id}
                style={{
                  borderRadius: '14px',
                  border: '1px solid #e6d9c8',
                  background: '#fff',
                  padding: '14px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  <div>
                    <h3 style={{ margin: 0 }}>{item.title}</h3>
                    <p style={{ margin: '6px 0', color: '#6b6256' }}>
                      {formatDateTime(item.date)} · Reference {item.id}
                    </p>
                  </div>
                  <span
                    style={{
                      padding: '6px 12px',
                      borderRadius: '999px',
                      background: '#f1e6d9',
                      color: statusTone(item.status),
                      border: '1px solid #dccfc1',
                      fontWeight: 700,
                      height: 'fit-content'
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <details style={{ marginTop: '8px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
                    View details
                  </summary>
                  <p style={{ margin: '8px 0 0', color: '#4a4036' }}>{item.details}</p>
                </details>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AccountLayout>
  );
}

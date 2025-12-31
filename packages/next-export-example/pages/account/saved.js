import { useState } from 'react';
import AccountLayout from '../../components/AccountLayout';
import AccountState from '../../components/AccountState';
import { useAccountData } from '../../components/useAccountData';

export default function AccountSaved() {
  const { status, data, error, refresh, mutate } = useAccountData();
  const [message, setMessage] = useState('');

  if (status !== 'success' || !data) {
    return (
      <AccountLayout description="Keep repeatable routines and defaults ready to go.">
        <AccountState status={status} error={error} onRetry={refresh} />
      </AccountLayout>
    );
  }

  const favorites = data.saved?.favorites ?? [];
  const defaults = data.saved?.defaults ?? [];

  const handleRemove = (id) => {
    setMessage('');
    const result = mutate((current) => ({
      ...current,
      saved: {
        ...current.saved,
        favorites: current.saved.favorites.filter((item) => item.id !== id)
      },
      lastActivity: new Date().toISOString()
    }));

    if (result.ok) {
      setMessage('Saved item removed. Your list is updated.');
    } else {
      setMessage(result.error?.message ?? 'Unable to remove saved item.');
    }
  };

  return (
    <AccountLayout description="Keep repeatable routines and defaults ready to go.">
      <section
        style={{
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <h2 style={{ marginTop: 0 }}>Saved items & defaults</h2>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          Save routines so your next visit starts with the right defaults.
        </p>

        {message && (
          <div
            role="status"
            style={{
              marginBottom: '12px',
              padding: '10px 12px',
              borderRadius: '12px',
              background: '#e8f5e9',
              border: '1px solid #b7dfb9',
              color: '#2c7a4b',
              fontWeight: 600
            }}
          >
            {message}
          </div>
        )}

        {favorites.length === 0 ? (
          <p style={{ color: '#4a4036' }}>
            You don&apos;t have any saved routines yet. Add favorites in the Field Manual to make
            repeat visits faster.
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
            {favorites.map((item) => (
              <li
                key={item.id}
                style={{
                  borderRadius: '14px',
                  border: '1px solid #e6d9c8',
                  background: '#fff',
                  padding: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <h3 style={{ margin: 0 }}>{item.label}</h3>
                  <p style={{ margin: '6px 0 0', color: '#4a4036' }}>{item.note}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '999px',
                    border: '1px solid #dccfc1',
                    background: '#fffaf4',
                    color: '#2a241d',
                    fontWeight: 600,
                    cursor: 'pointer',
                    height: 'fit-content'
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section
        style={{
          marginTop: '20px',
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <h3 style={{ marginTop: 0 }}>Defaults</h3>
        {defaults.length === 0 ? (
          <p style={{ margin: 0, color: '#4a4036' }}>
            No defaults are set yet. Choose a routine to set your preferred reminders.
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
            {defaults.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #e6d9c8',
                  background: '#fff'
                }}
              >
                <strong>{item.label}</strong>
                <p style={{ margin: '6px 0 0', color: '#4a4036' }}>{item.detail}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AccountLayout>
  );
}

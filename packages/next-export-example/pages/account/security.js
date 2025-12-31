import { useState } from 'react';
import AccountLayout from '../../components/AccountLayout';
import AccountState from '../../components/AccountState';
import { formatDateTime } from '../../components/accountUtils';
import { useAccountData } from '../../components/useAccountData';

export default function AccountSecurity() {
  const { status, data, error, refresh, mutate } = useAccountData();
  const [message, setMessage] = useState('');

  if (status !== 'success' || !data) {
    return (
      <AccountLayout description="Review login activity and protect your account.">
        <AccountState status={status} error={error} onRetry={refresh} />
      </AccountLayout>
    );
  }

  const sessions = data.security.sessions ?? [];

  const handleLogoutAll = () => {
    setMessage('');
    const result = mutate((current) => ({
      ...current,
      security: {
        ...current.security,
        sessions: []
      },
      lastActivity: new Date().toISOString()
    }));

    if (result.ok) {
      setMessage('Logged out of all devices. Sign in again to continue.');
    } else {
      setMessage(result.error?.message ?? 'Unable to log out all sessions.');
    }
  };

  return (
    <AccountLayout description="Review login activity and protect your account.">
      <section
        style={{
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <h2 style={{ marginTop: 0 }}>Security & trust signals</h2>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          Visible security details build trust. Review recent access below.
        </p>

        <dl
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginTop: '16px'
          }}
        >
          <div>
            <dt style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b6256' }}>
              Last login
            </dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>
              {formatDateTime(data.security.lastLogin)}
            </dd>
          </div>
          <div>
            <dt style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b6256' }}>
              Current auth method
            </dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>{data.auth.method}</dd>
          </div>
        </dl>

        {message && (
          <div
            role="status"
            style={{
              marginTop: '12px',
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

        <button
          type="button"
          onClick={handleLogoutAll}
          style={{
            marginTop: '12px',
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #2a241d',
            background: '#fff',
            color: '#2a241d',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Log out of all devices
        </button>
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
        <h3 style={{ marginTop: 0 }}>Active sessions</h3>
        {sessions.length === 0 ? (
          <p style={{ margin: 0, color: '#4a4036' }}>
            No active sessions found. You&apos;ll see new logins listed here.
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
            {sessions.map((session) => (
              <li
                key={session.id}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #e6d9c8',
                  background: '#fff'
                }}
              >
                <strong>{session.device}</strong>
                <p style={{ margin: '6px 0 0', color: '#4a4036' }}>{session.location}</p>
                <p style={{ margin: '6px 0 0', color: '#4a4036' }}>
                  Last active {formatDateTime(session.lastActive)}
                </p>
                {session.current && (
                  <span style={{ fontWeight: 600, color: '#2c7a4b' }}>Current session</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </AccountLayout>
  );
}

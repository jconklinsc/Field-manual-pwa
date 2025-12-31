import AccountLayout from '../../components/AccountLayout';
import AccountState from '../../components/AccountState';
import { formatDate, formatDateTime, statusTone } from '../../components/accountUtils';
import { useAccountData } from '../../components/useAccountData';

export default function AccountOverview() {
  const { status, data, error, refresh } = useAccountData();

  if (status !== 'success' || !data) {
    return (
      <AccountLayout description="Your account overview shows your current status and recent activity.">
        <AccountState status={status} error={error} onRetry={refresh} />
      </AccountLayout>
    );
  }

  const { user, summary, lastActivity } = data;

  return (
    <AccountLayout description="Your account overview shows your current status and recent activity.">
      <section
        style={{
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4',
          boxShadow: '0 16px 30px rgba(37, 28, 20, 0.12)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <h2 style={{ marginTop: 0, marginBottom: '6px' }}>
              Welcome back, {user.name}
            </h2>
            <p style={{ marginTop: 0, color: '#4a4036' }}>Account ID: {user.id}</p>
          </div>
          <span
            style={{
              alignSelf: 'start',
              padding: '6px 12px',
              borderRadius: '999px',
              background: '#f1e6d9',
              color: statusTone(user.status),
              border: '1px solid #dccfc1',
              fontWeight: 700
            }}
          >
            {user.status}
          </span>
        </div>
        <dl
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginTop: '16px',
            marginBottom: 0
          }}
        >
          <div>
            <dt style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b6256' }}>
              Plan
            </dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>{user.plan}</dd>
          </div>
          <div>
            <dt style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b6256' }}>
              Member since
            </dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>{formatDate(user.memberSince)}</dd>
          </div>
          <div>
            <dt style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b6256' }}>
              Last activity
            </dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>{formatDateTime(lastActivity)}</dd>
          </div>
        </dl>
      </section>

      <section style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
        <div
          style={{
            padding: '16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4'
          }}
        >
          <h3 style={{ marginTop: 0 }}>Primary value summary</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4a4036' }}>
            <li style={{ marginBottom: '6px' }}>
              Orders on file: <strong>{summary.orders}</strong>
            </li>
            <li style={{ marginBottom: '6px' }}>
              Care usage hours logged: <strong>{summary.usageHours}</strong>
            </li>
            <li style={{ marginBottom: '6px' }}>
              Credits available: <strong>{summary.credits}</strong>
            </li>
            <li>
              Membership tier: <strong>{summary.membershipLevel}</strong>
            </li>
          </ul>
        </div>
        <div
          style={{
            padding: '16px',
            borderRadius: '16px',
            border: '1px solid #e6d9c8',
            background: '#fffaf4'
          }}
        >
          <h3 style={{ marginTop: 0 }}>What’s next</h3>
          <p style={{ margin: 0, color: '#4a4036' }}>
            Review your latest activity, confirm saved routines, or update your profile if anything
            has changed.
          </p>
        </div>
      </section>
    </AccountLayout>
  );
}

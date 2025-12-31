import AccountLayout from '../../components/AccountLayout';
import AccountState from '../../components/AccountState';
import { useAccountData } from '../../components/useAccountData';

export default function AccountSupport() {
  const { status, data, error, refresh } = useAccountData();

  if (status !== 'success' || !data) {
    return (
      <AccountLayout description="Find help quickly and recover your account if needed.">
        <AccountState status={status} error={error} onRetry={refresh} />
      </AccountLayout>
    );
  }

  const { support } = data;

  return (
    <AccountLayout description="Find help quickly and recover your account if needed.">
      <section
        style={{
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <h2 style={{ marginTop: 0 }}>Support & recovery</h2>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          Start with self-service and escalate when you need a person.
        </p>

        <h3>Self-service resources</h3>
        <ul style={{ paddingLeft: '18px', color: '#4a4036' }}>
          {support.faqLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{ color: '#2a241d', fontWeight: 600 }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <h3>Contact support</h3>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          Email us at{' '}
          <a href={`mailto:${support.contactEmail}`} style={{ color: '#2a241d', fontWeight: 600 }}>
            {support.contactEmail}
          </a>
          .
        </p>
        <p style={{ marginTop: 0, color: '#4a4036' }}>Support hours: {support.supportHours}</p>
        <div
          style={{
            marginTop: '12px',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid #e6d9c8',
            background: '#fff'
          }}
        >
          <strong>Human escalation</strong>
          <p style={{ margin: '6px 0 0', color: '#4a4036' }}>
            If a self-service option doesn&apos;t resolve your issue, reach out directly and include your
            account ID for faster help.
          </p>
        </div>
      </section>
    </AccountLayout>
  );
}

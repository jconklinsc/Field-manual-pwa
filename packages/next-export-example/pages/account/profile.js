import { useEffect, useState } from 'react';
import AccountLayout from '../../components/AccountLayout';
import AccountState from '../../components/AccountState';
import { formatDateTime } from '../../components/accountUtils';
import { useAccountData } from '../../components/useAccountData';

function buildProfileDraft(data) {
  return {
    name: data.user.name,
    email: data.user.email,
    phone: data.profile.phone,
    location: data.profile.location,
    timezone: data.profile.timezone,
    notifications: {
      email: data.preferences.notifications.email,
      sms: data.preferences.notifications.sms
    },
    defaultHorse: data.preferences.defaultHorse,
    summaryFrequency: data.preferences.summaryFrequency
  };
}

export default function ProfilePreferences() {
  const { status, data, error, refresh, mutate } = useAccountData();
  const [saveMessage, setSaveMessage] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    if (status === 'success' && data && !draft) {
      setDraft(buildProfileDraft(data));
    }
  }, [data, draft, status]);

  if (status !== 'success' || !data || !draft) {
    return (
      <AccountLayout description="View and update your profile details and communication preferences.">
        <AccountState status={status} error={error} onRetry={refresh} />
      </AccountLayout>
    );
  }

  const isDirty = JSON.stringify(buildProfileDraft(data)) !== JSON.stringify(draft);

  const handleChange = (field) => (event) => {
    setDraft((prev) => ({ ...prev, [field]: event.target.value }));
    setSaveMessage('');
  };

  const handleToggle = (field) => (event) => {
    setDraft((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: event.target.checked }
    }));
    setSaveMessage('');
  };

  const handleSave = (event) => {
    event.preventDefault();
    setSaveMessage('');

    const result = mutate((current) => ({
      ...current,
      user: {
        ...current.user,
        name: draft.name,
        email: draft.email
      },
      profile: {
        ...current.profile,
        phone: draft.phone,
        location: draft.location,
        timezone: draft.timezone
      },
      preferences: {
        ...current.preferences,
        notifications: {
          email: draft.notifications.email,
          sms: draft.notifications.sms
        },
        defaultHorse: draft.defaultHorse,
        summaryFrequency: draft.summaryFrequency
      },
      lastActivity: new Date().toISOString()
    }));

    if (result.ok) {
      setSaveMessage('Changes saved. Your profile and preferences are up to date.');
    } else {
      setSaveMessage(result.error?.message ?? 'Unable to save changes.');
    }
  };

  const handlePasswordReset = () => {
    setAuthMessage('');
    const result = mutate((current) => ({
      ...current,
      security: {
        ...current.security,
        lastPasswordReset: new Date().toISOString()
      },
      lastActivity: new Date().toISOString()
    }));

    if (result.ok) {
      setAuthMessage('Password reset link sent. Check your email for next steps.');
    } else {
      setAuthMessage(result.error?.message ?? 'Unable to send reset link.');
    }
  };

  return (
    <AccountLayout description="View and update your profile details and communication preferences.">
      <form
        onSubmit={handleSave}
        style={{
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4',
          boxShadow: '0 12px 24px rgba(42, 36, 29, 0.08)'
        }}
      >
        <h2 style={{ marginTop: 0 }}>Profile details</h2>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          Keep this information accurate so your records and exports are labeled correctly.
        </p>

        {isDirty && (
          <div
            role="status"
            style={{
              marginBottom: '12px',
              padding: '10px 12px',
              borderRadius: '12px',
              background: '#fff4da',
              border: '1px solid #f1d38b',
              color: '#6b4a12',
              fontWeight: 600
            }}
          >
            Unsaved changes — don&apos;t forget to save.
          </div>
        )}

        {saveMessage && (
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
            {saveMessage}
          </div>
        )}

        <div style={{ display: 'grid', gap: '12px' }}>
          <label style={{ fontWeight: 600 }}>
            Full name
            <input
              type="text"
              value={draft.name}
              onChange={handleChange('name')}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #dccfc1',
                marginTop: '6px'
              }}
              aria-label="Full name"
            />
          </label>
          <label style={{ fontWeight: 600 }}>
            Email address
            <input
              type="email"
              value={draft.email}
              onChange={handleChange('email')}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #dccfc1',
                marginTop: '6px'
              }}
              aria-label="Email address"
            />
          </label>
          <label style={{ fontWeight: 600 }}>
            Phone
            <input
              type="tel"
              value={draft.phone}
              onChange={handleChange('phone')}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #dccfc1',
                marginTop: '6px'
              }}
              aria-label="Phone"
            />
          </label>
          <label style={{ fontWeight: 600 }}>
            Location
            <input
              type="text"
              value={draft.location}
              onChange={handleChange('location')}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #dccfc1',
                marginTop: '6px'
              }}
              aria-label="Location"
            />
          </label>
          <label style={{ fontWeight: 600 }}>
            Timezone
            <input
              type="text"
              value={draft.timezone}
              onChange={handleChange('timezone')}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #dccfc1',
                marginTop: '6px'
              }}
              aria-label="Timezone"
            />
          </label>
        </div>

        <h3 style={{ marginTop: '24px' }}>Preferences</h3>
        <div style={{ display: 'grid', gap: '12px' }}>
          <label style={{ display: 'flex', gap: '10px', alignItems: 'center', fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={draft.notifications.email}
              onChange={handleToggle('email')}
              aria-label="Email notifications"
            />
            Email notifications
          </label>
          <label style={{ display: 'flex', gap: '10px', alignItems: 'center', fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={draft.notifications.sms}
              onChange={handleToggle('sms')}
              aria-label="SMS notifications"
            />
            Text message reminders
          </label>
          <label style={{ fontWeight: 600 }}>
            Default horse
            <input
              type="text"
              value={draft.defaultHorse}
              onChange={handleChange('defaultHorse')}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #dccfc1',
                marginTop: '6px'
              }}
              aria-label="Default horse"
            />
          </label>
          <label style={{ fontWeight: 600 }}>
            Summary frequency
            <select
              value={draft.summaryFrequency}
              onChange={handleChange('summaryFrequency')}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '10px',
                border: '1px solid #dccfc1',
                marginTop: '6px'
              }}
              aria-label="Summary frequency"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </label>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              border: '1px solid #2a241d',
              background: '#2a241d',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Save changes
          </button>
          <span style={{ alignSelf: 'center', color: '#6b6256' }}>
            Last updated {formatDateTime(data.lastActivity)}
          </span>
        </div>
      </form>

      <section
        style={{
          marginTop: '24px',
          padding: '20px',
          borderRadius: '18px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <h3 style={{ marginTop: 0 }}>Password & authentication</h3>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          Login method: <strong>{data.auth.method}</strong> ({data.auth.provider})
        </p>
        <p style={{ marginTop: 0, color: '#4a4036' }}>
          Last password reset: {formatDateTime(data.security.lastPasswordReset)}
        </p>
        {authMessage && (
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
            {authMessage}
          </div>
        )}
        <button
          type="button"
          onClick={handlePasswordReset}
          style={{
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #2a241d',
            background: '#fff',
            color: '#2a241d',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Send password reset link
        </button>
      </section>
    </AccountLayout>
  );
}

export function formatDateTime(value) {
  if (!value) return 'Not available';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not available';
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

export function formatDate(value) {
  if (!value) return 'Not available';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not available';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function statusTone(status) {
  const normalized = status?.toLowerCase();
  if (normalized === 'active' || normalized === 'complete') return '#2c7a4b';
  if (normalized === 'trial') return '#b7791f';
  if (normalized === 'expired' || normalized === 'canceled') return '#9b2c2c';
  return '#4a4036';
}

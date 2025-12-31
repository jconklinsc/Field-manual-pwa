import { readJson, writeJson } from './storage';

const ACCOUNT_STORAGE_KEY = 'field-manual-account-data-v1';

const DEFAULT_ACCOUNT_DATA = {
  user: {
    id: 'FM-2041',
    name: 'Jordan Lee',
    email: 'jordan.lee@example.com',
    status: 'Active',
    plan: 'Care Plus Annual',
    memberSince: '2023-04-18T00:00:00.000Z'
  },
  summary: {
    orders: 3,
    usageHours: 18,
    credits: 2,
    membershipLevel: 'Gold'
  },
  lastActivity: '2024-02-18T10:24:00.000Z',
  profile: {
    phone: '(555) 010-9023',
    location: 'Sonoma, CA',
    timezone: 'Pacific (UTC-8)'
  },
  preferences: {
    notifications: {
      email: true,
      sms: false
    },
    defaultHorse: 'Willow',
    summaryFrequency: 'Weekly'
  },
  auth: {
    method: 'Email + password',
    provider: 'Field Manual'
  },
  history: [
    {
      id: 'ORD-1042',
      date: '2024-02-10T12:30:00.000Z',
      status: 'Complete',
      title: 'Care Edition Annual Renewal',
      details:
        'Renewed annual membership with continued access to all care checklists and offline sync.'
    },
    {
      id: 'ORD-0998',
      date: '2023-11-02T15:14:00.000Z',
      status: 'Complete',
      title: 'Veterinary Notes Export',
      details: 'Exported vet & farrier notes bundle for Willow and Cedar.'
    },
    {
      id: 'ORD-0931',
      date: '2023-08-18T09:40:00.000Z',
      status: 'Complete',
      title: 'Draw It Out Field Manual',
      details: 'Initial purchase with offline support and guided routines.'
    }
  ],
  saved: {
    favorites: [
      {
        id: 'fav-pre-ride',
        label: 'Pre-Ride Calm Check',
        note: 'Pre-ride checklist with extra focus on respiration and hydration.'
      },
      {
        id: 'fav-post-ride',
        label: 'Post-Ride Cool Down',
        note: 'Post-ride recovery sequence for warm afternoons.'
      }
    ],
    defaults: [
      {
        id: 'default-weekly',
        label: 'Weekly Care Summary',
        detail: 'Auto-collect daily notes every Friday at 4:00 PM.'
      }
    ]
  },
  support: {
    faqLinks: [
      {
        label: 'Getting started with care routines',
        href: '/articles'
      },
      {
        label: 'Favorites and saved checklists',
        href: '/favorites'
      },
      {
        label: 'Exporting notes for your vet',
        href: '/notes'
      }
    ],
    contactEmail: 'support@drawitout.app',
    supportHours: 'Mon–Fri, 9am–5pm Pacific'
  },
  security: {
    lastLogin: '2024-02-17T19:11:00.000Z',
    lastPasswordReset: '2024-01-02T08:00:00.000Z',
    sessions: [
      {
        id: 'sess-iphone',
        device: 'iPhone 14 Pro',
        location: 'Napa, CA',
        lastActive: '2024-02-17T19:11:00.000Z',
        current: true
      },
      {
        id: 'sess-ipad',
        device: 'iPad Air',
        location: 'Sonoma, CA',
        lastActive: '2024-02-12T14:50:00.000Z',
        current: false
      }
    ]
  }
};

let accountCache = null;
let accountPromise = null;

function cloneAccountData(data) {
  return JSON.parse(JSON.stringify(data));
}

function persistAccountData(data) {
  const saved = writeJson(ACCOUNT_STORAGE_KEY, data);
  if (!saved) {
    throw new Error('Unable to save account changes.');
  }
}

function loadFromStorage() {
  const stored = readJson(ACCOUNT_STORAGE_KEY, null);
  if (stored) {
    return stored;
  }
  persistAccountData(DEFAULT_ACCOUNT_DATA);
  return DEFAULT_ACCOUNT_DATA;
}

export function fetchAccountData() {
  if (accountCache) {
    return Promise.resolve(cloneAccountData(accountCache));
  }
  if (accountPromise) {
    return accountPromise.then((data) => cloneAccountData(data));
  }

  accountPromise = Promise.resolve()
    .then(() => {
      const data = loadFromStorage();
      accountCache = data;
      return data;
    })
    .finally(() => {
      accountPromise = null;
    });

  return accountPromise.then((data) => cloneAccountData(data));
}

export function mutateAccountData(updater) {
  const current = accountCache ?? loadFromStorage();
  const next = typeof updater === 'function' ? updater(cloneAccountData(current)) : updater;

  if (!next) {
    throw new Error('Account update returned no data.');
  }

  accountCache = next;
  persistAccountData(next);
  return cloneAccountData(next);
}

export function getDefaultAccountData() {
  return cloneAccountData(DEFAULT_ACCOUNT_DATA);
}

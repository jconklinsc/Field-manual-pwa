import { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';

const APPOINTMENTS_KEY = 'fieldManualAppointments';

function loadAppointments() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveAppointments(items) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(items));
}

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [horse, setHorse] = useState('');
  const [type, setType] = useState('Vet');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [reminderOffset, setReminderOffset] = useState('none');
  const [error, setError] = useState('');

  useEffect(() => {
    setAppointments(loadAppointments());
  }, []);

  useEffect(() => {
    if (!appointments.length) return;
    const now = new Date();
    let updated = false;
    let shouldAlert = false;
    const next = appointments.map(item => {
      if (!item.reminderOffset || item.reminderOffset === 'none') {
        return item;
      }
      if (item.reminded) return item;
      const baseTime = `${item.date}T${item.time || '08:00'}`;
      const reminderDate = new Date(baseTime);
      const offsetHours = Number(item.reminderOffset);
      reminderDate.setHours(reminderDate.getHours() - offsetHours);
      if (now >= reminderDate) {
        updated = true;
        shouldAlert = true;
        return { ...item, reminded: true, reminderAcknowledged: true };
      }
      return item;
    });

    if (updated) {
      setAppointments(next);
      saveAppointments(next);
      if (shouldAlert) {
        alert('Reminder: you have upcoming appointments.');
      }
    }
  }, [appointments]);

  const upcoming = useMemo(() => {
    return [...appointments].sort((a, b) => {
      const aDate = new Date(`${a.date}T${a.time || '00:00'}`);
      const bDate = new Date(`${b.date}T${b.time || '00:00'}`);
      return aDate - bDate;
    });
  }, [appointments]);

  function addAppointment() {
    if (!date || !horse.trim()) {
      setError('Add a horse name and date to schedule a visit.');
      return;
    }

    const next = [
      ...appointments,
      {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        horse: horse.trim(),
        type,
        date,
        time,
        notes: notes.trim(),
        reminderOffset,
        reminded: false,
        reminderAcknowledged: false
      }
    ];

    setAppointments(next);
    saveAppointments(next);
    setHorse('');
    setType('Vet');
    setDate('');
    setTime('');
    setNotes('');
    setReminderOffset('none');
    setError('');
  }

  function removeAppointment(id) {
    const next = appointments.filter(item => item.id !== id);
    setAppointments(next);
    saveAppointments(next);
  }

  return (
    <Layout>
      <h1>Vet & Farrier Appointments</h1>
      <p>
        Schedule and track upcoming care visits so nothing slips through the
        cracks.
      </p>

      <ArticleCard
        title="Stay Ahead of the Calendar"
        eyebrow="In-depth article"
        href="/articles#stay-ahead-of-the-calendar"
      >
        <p>
          Log each appointment with a date, time, and quick notes. When the week
          gets busy, this list keeps the next visit front and center.
        </p>
      </ArticleCard>

      <div style={{ marginTop: '16px' }}>
        <button
          type="button"
          onClick={() => {
            const input = document.getElementById('appointment-horse-input');
            if (input) input.focus();
          }}
          style={{
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid #dccfc1',
            background: '#f1e6d9',
            color: '#2a241d',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Schedule Visit
        </button>
      </div>

      <section
        style={{
          marginTop: '20px',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #e6d9c8',
          background: '#fffaf4'
        }}
      >
        <h3 style={{ marginTop: 0 }}>Add Appointment</h3>
        <div style={{ display: 'grid', gap: '10px' }}>
          <input
            id="appointment-horse-input"
            value={horse}
            onChange={e => {
              setHorse(e.target.value);
              if (error) setError('');
            }}
            placeholder="Horse name"
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #dccfc1'
            }}
          />
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #dccfc1'
            }}
          >
            <option value="Vet">Vet</option>
            <option value="Farrier">Farrier</option>
            <option value="Dentist">Dentist</option>
            <option value="Chiro">Chiro</option>
            <option value="Bodywork">Bodywork</option>
          </select>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="date"
              value={date}
              onChange={e => {
                setDate(e.target.value);
                if (error) setError('');
              }}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #dccfc1'
              }}
            />
            <input
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #dccfc1'
              }}
            />
          </div>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Notes or prep reminders..."
            rows={3}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #dccfc1'
            }}
          />
          <select
            value={reminderOffset}
            onChange={e => setReminderOffset(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #dccfc1'
            }}
          >
            <option value="none">No reminder</option>
            <option value="0">Morning of</option>
            <option value="24">1 day before</option>
            <option value="48">2 days before</option>
            <option value="168">7 days before</option>
          </select>
        </div>
        <button
          onClick={addAppointment}
          style={{
            marginTop: '12px',
            padding: '10px 16px',
            borderRadius: '999px',
            border: 'none',
            background: '#78be20',
            color: '#1f2a10',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Save Appointment
        </button>
        {error && <p style={{ color: '#9b4a1b', marginTop: '8px' }}>{error}</p>}
      </section>

      <section style={{ marginTop: '24px' }}>
        <h3>Upcoming</h3>
        {upcoming.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {upcoming.map(item => (
              <li
                key={item.id}
                style={{
                  padding: '12px',
                  marginBottom: '10px',
                  borderRadius: '12px',
                  border: '1px solid #e6d9c8',
                  background: '#fffaf4'
                }}
              >
                <div style={{ fontWeight: 600 }}>
                  {item.type} · {item.horse}
                </div>
                <div style={{ fontSize: '13px', color: '#6b6256' }}>
                  {new Date(`${item.date}T${item.time || '00:00'}`).toLocaleString()}
                </div>
                {item.reminderOffset && item.reminderOffset !== 'none' && (
                  <div style={{ fontSize: '12px', color: '#6b6256' }}>
                    Reminder set: {item.reminderOffset === '0'
                      ? 'Morning of'
                      : `${Number(item.reminderOffset) / 24} day(s) before`}
                  </div>
                )}
                {item.notes && <p style={{ margin: '6px 0 0' }}>{item.notes}</p>}
                <button
                  onClick={() => removeAppointment(item.id)}
                  style={{
                    marginTop: '8px',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    border: '1px solid #e6d9c8',
                    background: '#fff0e6',
                    color: '#9b4a1b',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}

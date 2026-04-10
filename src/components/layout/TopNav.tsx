import { MapPin, Bell, CloudSun } from 'lucide-react';

const tabs = ['Overview', 'Monitoring', 'Predictive AI', 'Management'];

export default function TopNav() {
  return (
    <nav
      style={{
        background: 'var(--color-nav)',
        borderBottom: '1px solid var(--color-border)',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        paddingInline: '16px',
        gap: '0',
        flexShrink: 0,
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '32px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'linear-gradient(135deg, #3b82f6, #22c55e)',
          borderRadius: '6px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 12 L5 6 L8 9 L11 4 L14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
          Smart City Platform
        </span>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
        {tabs.map((tab) => {
          const active = tab === 'Predictive AI';
          return (
            <button
              key={tab}
              style={{
                padding: '6px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--color-text)' : 'var(--color-muted)',
                background: active ? 'var(--color-active-tab)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-muted)', fontSize: '13px' }}>
          <MapPin size={14} />
          <span>Singapore</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-muted)', fontSize: '13px' }}>
          <CloudSun size={14} style={{ color: '#fbbf24' }} />
          <span>75°F, 11:00 PM</span>
        </div>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-muted)', display: 'flex' }}>
          <Bell size={16} />
        </button>
        <div style={{
          width: '28px', height: '28px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '12px', fontWeight: 600,
        }}>
          A
        </div>
      </div>
    </nav>
  );
}

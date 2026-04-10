import { Map, Car, Wind, Zap, Radio, Layers, BarChart2 } from 'lucide-react';

const icons = [
  { Icon: Map, label: 'Map' },
  { Icon: Car, label: 'Traffic' },
  { Icon: Wind, label: 'Environment' },
  { Icon: Zap, label: 'Energy', active: true },
  { Icon: Radio, label: 'Sensors' },
  { Icon: Layers, label: 'Layers' },
  { Icon: BarChart2, label: 'Analytics' },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: '60px',
        background: 'var(--color-sidebar)',
        borderRight: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '12px',
        gap: '4px',
        flexShrink: 0,
      }}
    >
      {icons.map(({ Icon, label, active }) => (
        <button
          key={label}
          title={label}
          style={{
            width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '8px',
            background: active ? 'rgba(59,130,246,0.2)' : 'transparent',
            border: active ? '1px solid rgba(59,130,246,0.4)' : '1px solid transparent',
            color: active ? 'var(--color-primary)' : 'var(--color-muted)',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
        >
          <Icon size={18} />
        </button>
      ))}
    </aside>
  );
}

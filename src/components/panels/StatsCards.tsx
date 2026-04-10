import { stats } from '../../data/mockData';
import { useEnergy } from '../../context/EnergyContext';

const cardStyle: React.CSSProperties = {
  background: 'var(--color-panel)',
  border: '1px solid var(--color-border)',
  borderRadius: '10px',
  padding: '12px',
};

function formatVal(val: number): string {
  if (val >= 100000) return `${(val / 1000).toFixed(1)}k`;
  if (val >= 10000) return `${(val / 1000).toFixed(1)}k`;
  return val.toLocaleString();
}

function StatCard({ label, current, optimized, unit }: {
  label: string; current: number; optimized: number; unit: string;
}) {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
        <span style={{ fontSize: '20px', fontWeight: 700 }}>{formatVal(current)}</span>
        <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>{unit}</span>
      </div>
      <p style={{ fontSize: '10px', color: 'var(--color-muted)', marginBottom: '6px' }}>{label}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
          {formatVal(optimized)} {unit}
        </span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '3px',
          background: 'rgba(34,197,94,0.15)',
          border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: '20px',
          padding: '1px 6px',
          fontSize: '10px', fontWeight: 700,
          color: 'var(--color-green)',
        }}>
          +25%
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-green)' }} />
        </div>
      </div>
    </div>
  );
}

export default function StatsCards() {
  // Use live floor 14 consumption to scale daily stat dynamically
  const { floorData } = useEnergy();
  const floor14 = floorData.find((f) => f.id === 14);
  const liveDailyConsumption = floor14 ? floor14.liveConsumption : stats.daily.current;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
      <StatCard
        label={stats.daily.label}
        current={liveDailyConsumption}
        optimized={stats.daily.optimized}
        unit={stats.daily.unit}
      />
      <StatCard
        label={stats.weekly.label}
        current={stats.weekly.current}
        optimized={stats.weekly.optimized}
        unit={stats.weekly.unit}
      />
      <StatCard
        label={stats.monthly.label}
        current={stats.monthly.current}
        optimized={stats.monthly.optimized}
        unit={stats.monthly.unit}
      />
      <StatCard
        label={stats.yearly.label}
        current={stats.yearly.current}
        optimized={stats.yearly.optimized}
        unit={stats.yearly.unit}
      />
    </div>
  );
}

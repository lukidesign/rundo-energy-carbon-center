import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { energyBarData } from '../../data/mockData';

const panelStyle: React.CSSProperties = {
  background: 'var(--color-panel)',
  border: '1px solid var(--color-border)',
  borderRadius: '12px',
  padding: '14px',
};

export default function EnergyConsumptionPanel() {
  return (
    <div style={panelStyle}>
      <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px' }}>Energy Consumption</p>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '14px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'var(--color-primary)' }} />
          <span style={{ fontSize: '10px', color: 'var(--color-muted)' }}>Currently</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'var(--color-primary-light)' }} />
          <span style={{ fontSize: '10px', color: 'var(--color-muted)' }}>After applying AI suggestions</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={energyBarData} barGap={2} margin={{ top: 4, right: 0, left: -20, bottom: 0 }}>
          <XAxis
            dataKey="time"
            tick={{ fill: 'var(--color-muted)', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'var(--color-muted)', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: '#0d1829',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              fontSize: '11px',
              color: 'white',
            }}
            cursor={{ fill: 'rgba(255,255,255,0.04)' }}
          />
          <Bar dataKey="optimized" fill="var(--color-primary-light)" radius={[2, 2, 0, 0]} maxBarSize={16} />
          <Bar dataKey="current" fill="var(--color-primary)" radius={[2, 2, 0, 0]} maxBarSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

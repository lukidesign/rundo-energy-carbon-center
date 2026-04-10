import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { monthlySavingsData } from '../../data/mockData';

const panelStyle: React.CSSProperties = {
  background: 'var(--color-panel)',
  border: '1px solid var(--color-border)',
  borderRadius: '12px',
  padding: '14px',
};

export default function MonthlySavingsPanel() {
  return (
    <div style={panelStyle}>
      <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px' }}>Monthly Savings</p>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '10px' }}>
        <div>
          <span style={{ fontSize: '16px', fontWeight: 700 }}>4.3k</span>
          <span style={{ fontSize: '10px', color: 'var(--color-muted)', marginLeft: '3px' }}>$</span>
          <p style={{ fontSize: '10px', color: 'var(--color-muted)' }}>Cost savings</p>
        </div>
        <div>
          <span style={{ fontSize: '16px', fontWeight: 700 }}>2.4k</span>
          <span style={{ fontSize: '10px', color: 'var(--color-muted)', marginLeft: '3px' }}>kWh</span>
          <p style={{ fontSize: '10px', color: 'var(--color-muted)' }}>Energy savings</p>
        </div>
        <div>
          <span style={{ fontSize: '16px', fontWeight: 700 }}>135</span>
          <span style={{ fontSize: '10px', color: 'var(--color-muted)', marginLeft: '3px' }}>CO²</span>
          <p style={{ fontSize: '10px', color: 'var(--color-muted)' }}>Emission</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={90}>
        <LineChart data={monthlySavingsData} margin={{ top: 4, right: 0, left: -28, bottom: 0 }}>
          <XAxis
            dataKey="date"
            tick={{ fill: 'var(--color-muted)', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            interval={3}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              background: '#0d1829',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              fontSize: '11px',
              color: 'white',
            }}
          />
          <Line type="monotone" dataKey="cost" stroke="var(--color-primary)" strokeWidth={1.5} dot={false} />
          <Line type="monotone" dataKey="energy" stroke="var(--color-primary-light)" strokeWidth={1.5} dot={false} />
          <Line type="monotone" dataKey="co2" stroke="var(--color-green)" strokeWidth={1.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

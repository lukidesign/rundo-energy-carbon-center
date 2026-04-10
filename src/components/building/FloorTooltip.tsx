import { useEnergy } from '../../context/EnergyContext';

export default function FloorTooltip() {
  const { activeFloor, floorData } = useEnergy();
  const floor = floorData.find((f) => f.id === activeFloor);
  if (!floor) return null;

  const savingPct = Math.round((1 - floor.optimized / floor.liveConsumption) * 100);

  return (
    <div style={{
      background: 'rgba(10, 20, 40, 0.95)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '10px',
      padding: '12px 14px',
      minWidth: '180px',
      pointerEvents: 'none',
      boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    }}>
      <p style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'white' }}>
        {floor.label}
      </p>
      <p style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '2px' }}>Current consumption</p>
      <p style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
        {floor.liveConsumption} <span style={{ fontSize: '11px', fontWeight: 400 }}>kWh</span>
      </p>
      <p style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '2px' }}>After optimization</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '16px', fontWeight: 700, color: '#3b82f6' }}>
          {floor.optimized} <span style={{ fontSize: '11px', fontWeight: 400 }}>kWh</span>
        </span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '3px',
          background: 'rgba(34,197,94,0.15)',
          border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: '20px',
          padding: '2px 7px',
          fontSize: '11px', fontWeight: 700,
          color: '#22c55e',
        }}>
          +{savingPct}%
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e' }} />
        </div>
      </div>
    </div>
  );
}

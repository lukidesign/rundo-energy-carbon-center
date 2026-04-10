import { Layers, Plus, Minus } from 'lucide-react';

const btnStyle: React.CSSProperties = {
  width: '32px', height: '32px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(13,24,41,0.9)',
  border: '1px solid var(--color-border)',
  borderRadius: '6px',
  color: 'var(--color-muted)',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: 600,
};

export default function MapControls() {
  return (
    <div style={{
      position: 'absolute',
      right: '20px',
      bottom: '80px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      zIndex: 10,
    }}>
      <button style={btnStyle}><Plus size={14} /></button>
      <button style={btnStyle}><Minus size={14} /></button>
    </div>
  );
}

export function ViewControls() {
  return (
    <div style={{
      position: 'absolute',
      right: '20px',
      bottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      zIndex: 10,
    }}>
      <button style={{ ...btnStyle, fontSize: '11px', fontWeight: 700, color: 'var(--color-text)' }}>
        2D
      </button>
      <button style={btnStyle}><Layers size={14} /></button>
    </div>
  );
}

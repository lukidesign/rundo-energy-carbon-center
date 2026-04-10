import { useEnergy } from '../../context/EnergyContext';
import { floorBaselineData } from '../../data/mockData';

export default function FloorSelector() {
  const { activeFloor, setActiveFloor } = useEnergy();
  const floors = [...floorBaselineData].reverse();

  return (
    <div style={{
      position: 'absolute',
      left: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      zIndex: 10,
    }}>
      {floors.map((floor) => {
        const isActive = activeFloor === floor.id;
        return (
          <button
            key={floor.id}
            onClick={() => setActiveFloor(floor.id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: isActive ? 700 : 400,
              color: isActive ? 'var(--color-green)' : 'var(--color-muted)',
              padding: '2px 4px',
              textAlign: 'left',
              transition: 'color 0.15s',
            }}
          >
            {floor.label}
          </button>
        );
      })}
    </div>
  );
}

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { floorBaselineData, FloorData } from '../data/mockData';

interface LiveFloorData extends FloorData {
  liveConsumption: number;
  isAlert: boolean;
}

interface EnergyContextValue {
  floorData: LiveFloorData[];
  activeFloor: number;
  setActiveFloor: (id: number) => void;
}

const EnergyContext = createContext<EnergyContextValue | null>(null);

const ALERT_THRESHOLD = 350;

function applyNoise(value: number, pct = 0.05): number {
  const delta = value * pct;
  return Math.round(value + (Math.random() * 2 - 1) * delta);
}

export function EnergyProvider({ children }: { children: ReactNode }) {
  const [floorData, setFloorData] = useState<LiveFloorData[]>(() =>
    floorBaselineData.map((f) => ({
      ...f,
      liveConsumption: f.consumption,
      isAlert: false,
    }))
  );
  const [activeFloor, setActiveFloor] = useState(14);

  const tick = useCallback(() => {
    setFloorData((prev) =>
      prev.map((f) => {
        const liveConsumption = applyNoise(f.consumption);
        return {
          ...f,
          liveConsumption,
          isAlert: f.id === 14 && liveConsumption > ALERT_THRESHOLD,
        };
      })
    );
  }, []);

  useEffect(() => {
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <EnergyContext.Provider value={{ floorData, activeFloor, setActiveFloor }}>
      {children}
    </EnergyContext.Provider>
  );
}

export function useEnergy() {
  const ctx = useContext(EnergyContext);
  if (!ctx) throw new Error('useEnergy must be used within EnergyProvider');
  return ctx;
}

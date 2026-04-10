export interface FloorData {
  id: number;
  label: string;
  consumption: number;      // kWh baseline
  optimized: number;        // kWh after AI
  isHighlighted: boolean;   // green glow
}

export interface BarDataPoint {
  time: string;
  current: number;
  optimized: number;
}

export interface SavingsDataPoint {
  date: string;
  cost: number;
  energy: number;
  co2: number;
}

export const floorBaselineData: FloorData[] = [
  { id: 17, label: '17F', consumption: 180, optimized: 135, isHighlighted: false },
  { id: 16, label: '16F', consumption: 210, optimized: 158, isHighlighted: true },
  { id: 15, label: '15F', consumption: 245, optimized: 184, isHighlighted: true },
  { id: 14, label: '14F', consumption: 332, optimized: 204, isHighlighted: true },
  { id: 13, label: '13F', consumption: 198, optimized: 149, isHighlighted: false },
  { id: 12, label: '12F', consumption: 172, optimized: 129, isHighlighted: false },
  { id: 11, label: '11F', consumption: 155, optimized: 116, isHighlighted: false },
];

export const energyBarData: BarDataPoint[] = [
  { time: '06:00', current: 144, optimized: 220 },
  { time: '', current: 220, optimized: 284 },
  { time: '12:00', current: 190, optimized: 346 },
  { time: '', current: 151, optimized: 262 },
  { time: '18:00', current: 168, optimized: 272 },
  { time: '', current: 199, optimized: 291 },
  { time: '', current: 96, optimized: 168 },
  { time: 'Now', current: 80, optimized: 120 },
];

export const monthlySavingsData: SavingsDataPoint[] = [
  { date: '1 Dec', cost: 1200, energy: 800, co2: 40 },
  { date: '3 Dec', cost: 1800, energy: 1100, co2: 55 },
  { date: '5 Dec', cost: 2400, energy: 1500, co2: 70 },
  { date: '8 Dec', cost: 3100, energy: 1900, co2: 85 },
  { date: '10 Dec', cost: 2600, energy: 1700, co2: 75 },
  { date: '12 Dec', cost: 3400, energy: 2000, co2: 90 },
  { date: '15 Dec', cost: 5200, energy: 2800, co2: 110 },
  { date: '18 Dec', cost: 4100, energy: 2400, co2: 100 },
  { date: '20 Dec', cost: 4800, energy: 2600, co2: 115 },
  { date: '22 Dec', cost: 3900, energy: 2200, co2: 95 },
  { date: '25 Dec', cost: 5500, energy: 3000, co2: 125 },
  { date: '28 Dec', cost: 4300, energy: 2500, co2: 105 },
  { date: '30 Dec', cost: 4300, energy: 2400, co2: 135 },
];

export const aiSuggestion = {
  title: 'Optimize ventilation at 14F in the office sector',
  description:
    'Due last 2 weeks, office sector are unoccupied for 70% of the time during non-business hours. By implementing dynamic ventilation, there is a potential 25% reduction in energy consumption.',
  saving: '+25%',
};

export const stats = {
  daily: { current: 332, optimized: 204, label: 'Daily consumption', unit: 'kWh' },
  weekly: { current: 1437, optimized: 1204, label: 'Weekly consumption', unit: 'kWh' },
  monthly: { current: 10400, optimized: 8100, label: 'Monthly consumption', unit: 'kWh' },
  yearly: { current: 154300, optimized: 125200, label: 'Yearly consumption', unit: 'kWh' },
};

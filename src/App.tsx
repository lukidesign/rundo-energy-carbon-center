import { motion } from 'framer-motion';
import { EnergyProvider } from './context/EnergyContext';
import TopNav from './components/layout/TopNav';
import Sidebar from './components/layout/Sidebar';
import AISuggestionPanel from './components/panels/AISuggestionPanel';
import EnergyConsumptionPanel from './components/panels/EnergyConsumptionPanel';
import StatsCards from './components/panels/StatsCards';
import MonthlySavingsPanel from './components/panels/MonthlySavingsPanel';
import Building3D from './components/building/Building3D';
import FloorSelector from './components/building/FloorSelector';
import MapControls, { ViewControls } from './components/ui/MapControls';
import './index.css';

// Granularity tabs
const granularityTabs = ['City', 'District', 'Street', 'Building'];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { x: -24, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

function PanelsColumn() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        width: '340px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '12px',
        overflowY: 'auto',
        height: '100%',
      }}
    >
      <motion.div variants={itemVariants}><AISuggestionPanel /></motion.div>
      <motion.div variants={itemVariants}><EnergyConsumptionPanel /></motion.div>
      <motion.div variants={itemVariants}><StatsCards /></motion.div>
      <motion.div variants={itemVariants}><MonthlySavingsPanel /></motion.div>
    </motion.div>
  );
}

function BuildingView() {
  return (
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      {/* Granularity tabs */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '4px',
        zIndex: 10,
        background: 'rgba(13,24,41,0.85)',
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        padding: '4px',
      }}>
        {granularityTabs.map((tab) => {
          const active = tab === 'Building';
          return (
            <button
              key={tab}
              style={{
                padding: '5px 16px',
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--color-text)' : 'var(--color-muted)',
                background: active ? 'var(--color-active-tab)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* 3D Canvas */}
      <Building3D />

      {/* Floor selector overlay */}
      <FloorSelector />

      {/* Map controls */}
      <MapControls />
      <ViewControls />
    </div>
  );
}

export default function App() {
  return (
    <EnergyProvider>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <TopNav />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <Sidebar />
          <PanelsColumn />
          <BuildingView />
        </div>
      </div>
    </EnergyProvider>
  );
}

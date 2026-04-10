import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import FloorMesh, { FLOOR_HEIGHT, FLOOR_GAP } from './FloorMesh';
import ScanRing from './ScanRing';
import FloorTooltip from './FloorTooltip';
import { floorBaselineData } from '../../data/mockData';
import { useEnergy } from '../../context/EnergyContext';

// Building base platform
function BasePlatform() {
  return (
    <group>
      {/* Main base */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[5.5, 0.3, 3.8]} />
        <meshStandardMaterial color="#060f1e" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Outer platform */}
      <mesh position={[0, -0.32, 0]}>
        <boxGeometry args={[7, 0.1, 5.5]} />
        <meshStandardMaterial color="#040a14" metalness={0.6} roughness={0.5} />
      </mesh>
    </group>
  );
}

// Label tag for the building
function BuildingLabel() {
  return (
    <Html position={[3.5, 5.5, 0]} distanceFactor={8}>
      <div style={{
        background: 'rgba(10,20,40,0.85)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '6px',
        padding: '5px 10px',
        fontSize: '12px',
        color: 'white',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        Main Hospital Building
      </div>
    </Html>
  );
}

// Floor tooltip anchored to active floor
function AnchoredTooltip() {
  const { activeFloor, floorData } = useEnergy();
  const floorIdx = floorBaselineData.findIndex((f) => f.id === activeFloor);
  if (floorIdx === -1) return null;
  const y = floorIdx * (FLOOR_HEIGHT + FLOOR_GAP) + FLOOR_HEIGHT / 2 + 0.5;

  return (
    <Html position={[-2.5, y, 1.5]} distanceFactor={8}>
      <FloorTooltip />
    </Html>
  );
}

export default function Building3D() {
  return (
    <Canvas
      camera={{ position: [10, 9, 10], fov: 42 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 12, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, 8, -5]} intensity={0.4} color="#3b82f6" />
      <pointLight position={[0, 3, 0]} intensity={2} color="#22c55e" distance={8} decay={2} />

      <Suspense fallback={null}>
        {/* Building floors */}
        {floorBaselineData.map((floor, idx) => (
          <FloorMesh
            key={floor.id}
            floorId={floor.id}
            index={idx}
            isHighlighted={floor.isHighlighted}
            totalFloors={floorBaselineData.length}
          />
        ))}

        {/* Base */}
        <BasePlatform />

        {/* Scan ring */}
        <ScanRing />

        {/* Building label */}
        <BuildingLabel />

        {/* Tooltip anchored to active floor */}
        <AnchoredTooltip />

        {/* Bloom post-processing */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
            intensity={1.8}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>

      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={8}
        maxDistance={20}
        autoRotate={false}
      />
    </Canvas>
  );
}

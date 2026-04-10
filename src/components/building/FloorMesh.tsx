import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useEnergy } from '../../context/EnergyContext';

interface FloorMeshProps {
  floorId: number;
  index: number;
  isHighlighted: boolean;
  totalFloors: number;
}

const FLOOR_HEIGHT = 0.22;
const FLOOR_GAP = 0.04;
const FLOOR_W = 3.8;
const FLOOR_D = 2.4;

export default function FloorMesh({ floorId, index, isHighlighted, totalFloors }: FloorMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { activeFloor, setActiveFloor, floorData } = useEnergy();
  const floorInfo = floorData.find((f) => f.id === floorId);
  const isAlert = floorInfo?.isAlert ?? false;
  const isActive = activeFloor === floorId;

  const y = index * (FLOOR_HEIGHT + FLOOR_GAP) + FLOOR_HEIGHT / 2;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    if (isAlert) {
      mat.emissiveIntensity = 1.2 + Math.sin(Date.now() * 0.005) * 0.8;
    } else if (isHighlighted) {
      mat.emissiveIntensity = 1.0 + Math.sin(Date.now() * 0.002) * 0.4;
    } else if (hovered || isActive) {
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.6, delta * 4);
    } else {
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.0, delta * 4);
    }
  });

  const emissiveColor = isAlert ? '#ef4444' : isHighlighted ? '#22c55e' : '#3b82f6';

  return (
    <mesh
      ref={meshRef}
      position={[0, y, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); setActiveFloor(floorId); }}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[FLOOR_W, FLOOR_HEIGHT, FLOOR_D]} />
      <meshStandardMaterial
        color={isHighlighted ? '#1a4a2e' : '#0d2040'}
        emissive={emissiveColor}
        emissiveIntensity={isHighlighted ? 1.0 : 0.0}
        transparent
        opacity={0.85}
        roughness={0.2}
        metalness={0.3}
      />
    </mesh>
  );
}

export { FLOOR_HEIGHT, FLOOR_GAP };

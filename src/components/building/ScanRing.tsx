import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ScanRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ringRef.current || !outerRingRef.current) return;
    const t = Date.now() * 0.001;
    ringRef.current.rotation.z = t * 0.5;
    outerRingRef.current.rotation.z = -t * 0.3;
    // Breathing opacity
    const opacity = 0.3 + Math.sin(t * 1.5) * 0.2;
    (ringRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;
    (outerRingRef.current.material as THREE.MeshBasicMaterial).opacity = opacity * 0.5;
  });

  return (
    <group position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Inner ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[2.2, 2.5, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      {/* Outer ring */}
      <mesh ref={outerRingRef}>
        <ringGeometry args={[3.0, 3.2, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      {/* Platform glow disc */}
      <mesh>
        <circleGeometry args={[2.1, 64]} />
        <meshBasicMaterial color="#0d2040" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

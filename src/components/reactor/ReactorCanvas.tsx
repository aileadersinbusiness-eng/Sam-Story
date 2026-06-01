'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ReactorCore({ phase }: { phase: number }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      const s = 1 + Math.sin(t * 1.5) * 0.05 * phase;
      coreRef.current.scale.setScalar(s);
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.5;
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.4;
      ring2Ref.current.rotation.y = t * 0.2;
    }
    if (ring3Ref.current) ring3Ref.current.rotation.y = -t * 0.35;
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = t * 0.15;
      outerRingRef.current.rotation.z = t * 0.25;
      outerRingRef.current.scale.setScalar(0.5 + phase * 0.5);
    }
  });

  const coreGeo = useMemo(() => new THREE.IcosahedronGeometry(0.6, 2), []);
  const ring1Geo = useMemo(() => new THREE.TorusGeometry(1.4, 0.015, 8, 80), []);
  const ring2Geo = useMemo(() => new THREE.TorusGeometry(1.9, 0.012, 8, 80), []);
  const ring3Geo = useMemo(() => new THREE.TorusGeometry(2.5, 0.01, 8, 80), []);
  const outerGeo = useMemo(() => new THREE.TorusGeometry(3.5, 0.008, 8, 120), []);

  const coreMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#00D4FF',
    emissive: '#1B6CF2',
    emissiveIntensity: 0.6 + phase * 0.8,
    roughness: 0.2,
    metalness: 0.8,
    wireframe: false,
  }), [phase]);

  const ringMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#00D4FF',
    transparent: true,
    opacity: 0.4 + phase * 0.3,
  }), [phase]);

  const outerMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#1B6CF2',
    transparent: true,
    opacity: 0.2 + phase * 0.2,
  }), [phase]);

  return (
    <group>
      <mesh ref={coreRef} geometry={coreGeo} material={coreMat} />
      <mesh ref={ring1Ref} geometry={ring1Geo} material={ringMat} />
      <mesh ref={ring2Ref} geometry={ring2Geo} material={ringMat} />
      <mesh ref={ring3Ref} geometry={ring3Geo} material={ringMat} />
      <mesh ref={outerRingRef} geometry={outerGeo} material={outerMat} />
    </group>
  );
}

function ParticleField({ count = 800, phase }: { count?: number; phase: number }) {
  const pts = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (pts.current) {
      pts.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      pts.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={pts} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D4FF"
        size={0.03 + phase * 0.015}
        sizeAttenuation
        opacity={0.3 + phase * 0.4}
        depthWrite={false}
      />
    </Points>
  );
}

function NodeOrbit({ phase }: { phase: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    angle: (i / 6) * Math.PI * 2,
    radius: 2.2 + (i % 2) * 0.4,
    speed: 0.2 + i * 0.05,
  })), []);

  const sphereGeo = useMemo(() => new THREE.SphereGeometry(0.08, 8, 8), []);
  const sphereMat = useMemo(() => new THREE.MeshBasicMaterial({ color: '#00D4FF', transparent: true, opacity: 0.8 }), []);

  useFrame((state) => {
    if (!groupRef.current || phase < 0.2) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const node = nodes[i];
      if (!node) return;
      const angle = node.angle + t * node.speed;
      child.position.x = Math.cos(angle) * node.radius;
      child.position.z = Math.sin(angle) * node.radius;
      child.position.y = Math.sin(t * 0.3 + i) * 0.3;
    });
  });

  if (phase < 0.1) return null;

  return (
    <group ref={groupRef}>
      {nodes.map((_, i) => (
        <mesh key={i} geometry={sphereGeo} material={sphereMat} />
      ))}
    </group>
  );
}

function CameraRig({ phase }: { phase: number }) {
  useThree(({ camera }) => {
    camera.position.set(0, 0, 8 - phase * 3);
    camera.lookAt(0, 0, 0);
  });
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.08) * 0.5;
    camera.position.y = Math.cos(t * 0.06) * 0.3;
  });
  return null;
}

interface ReactorCanvasProps {
  phase?: number;
  className?: string;
}

export default function ReactorCanvas({ phase = 0, className = '' }: ReactorCanvasProps) {
  return (
    <div className={className} style={{ background: 'transparent' }}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 8], fov: 55 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00D4FF" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#1B6CF2" />
        <CameraRig phase={phase} />
        <ReactorCore phase={phase} />
        <ParticleField count={600} phase={phase} />
        <NodeOrbit phase={phase} />
      </Canvas>
    </div>
  );
}
